interface TokenData {
  accessToken: string;
  refreshToken?: string;
  expiresAt: number;
}

class SecureTokenStorage {
  private static readonly ACCESS_TOKEN_KEY = 'mowo_access_token';
  private static readonly REFRESH_TOKEN_KEY = 'mowo_refresh_token';
  private static readonly EXPIRES_AT_KEY = 'mowo_token_expires';

  static setTokens(tokens: TokenData): void {
    try {
      // sessionStorage 사용으로 XSS 공격 완화 (브라우저 종료 시 자동 삭제)
      sessionStorage.setItem(this.ACCESS_TOKEN_KEY, this.encrypt(tokens.accessToken));
      sessionStorage.setItem(this.EXPIRES_AT_KEY, tokens.expiresAt.toString());
      
      if (tokens.refreshToken) {
        // refresh token은 더 안전한 저장소 사용 가능시 적용
        sessionStorage.setItem(this.REFRESH_TOKEN_KEY, this.encrypt(tokens.refreshToken));
      }
    } catch (error) {
      console.error('토큰 저장 실패:', error);
      throw new Error('인증 토큰 저장에 실패했습니다.');
    }
  }

  static getAccessToken(): string | null {
    try {
      const encryptedToken = sessionStorage.getItem(this.ACCESS_TOKEN_KEY);
      const expiresAt = sessionStorage.getItem(this.EXPIRES_AT_KEY);
      
      if (!encryptedToken || !expiresAt) {
        return null;
      }

      // 토큰 만료 확인
      if (Date.now() > parseInt(expiresAt)) {
        this.clearTokens();
        return null;
      }

      return this.decrypt(encryptedToken);
    } catch (error) {
      console.error('토큰 조회 실패:', error);
      this.clearTokens();
      return null;
    }
  }

  static getRefreshToken(): string | null {
    try {
      const encryptedToken = sessionStorage.getItem(this.REFRESH_TOKEN_KEY);
      return encryptedToken ? this.decrypt(encryptedToken) : null;
    } catch (error) {
      console.error('리프레시 토큰 조회 실패:', error);
      return null;
    }
  }

  static clearTokens(): void {
    sessionStorage.removeItem(this.ACCESS_TOKEN_KEY);
    sessionStorage.removeItem(this.REFRESH_TOKEN_KEY);
    sessionStorage.removeItem(this.EXPIRES_AT_KEY);
    
    // localStorage에서도 기존 토큰 제거 (마이그레이션)
    localStorage.removeItem('token');
  }

  static isTokenValid(): boolean {
    const token = this.getAccessToken();
    return token !== null;
  }

  // 간단한 암호화 (실제 프로덕션에서는 Web Crypto API 사용 권장)
  private static encrypt(text: string): string {
    try {
      return btoa(encodeURIComponent(text));
    } catch (error) {
      return text; // 암호화 실패시 원본 반환 (fallback)
    }
  }

  private static decrypt(encryptedText: string): string {
    try {
      return decodeURIComponent(atob(encryptedText));
    } catch (error) {
      return encryptedText; // 복호화 실패시 원본 반환 (fallback)
    }
  }

  // 토큰 자동 갱신을 위한 유틸리티
  static getTimeUntilExpiry(): number {
    const expiresAt = sessionStorage.getItem(this.EXPIRES_AT_KEY);
    if (!expiresAt) return 0;
    
    return Math.max(0, parseInt(expiresAt) - Date.now());
  }

  static shouldRefreshToken(): boolean {
    const timeLeft = this.getTimeUntilExpiry();
    return timeLeft > 0 && timeLeft < 5 * 60 * 1000; // 5분 전에 갱신
  }
}

export default SecureTokenStorage;