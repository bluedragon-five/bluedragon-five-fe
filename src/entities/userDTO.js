export class LoginRequestDTO {
    constructor(loginId, password) {
      this.loginId = loginId
      this.password = password
    }
  }

export class LoginResponseDTO {
    constructor(success, message, userId = null) {
        this.success = success
        this.message = message
        this.userId = userId
    }
}

export class SignupRequestDTO {
    constructor(loginId, password) {
        this.loginId = loginId
        this.password = password
    }
}

export class SignupResponseDTO {
    constructor(message, userId = null) {
        this.message = message
        this.userId = userId
    }
}