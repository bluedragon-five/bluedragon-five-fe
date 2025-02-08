export class LoginRequestDTO {
    constructor(id, password) {
      this.id = id
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