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

// 개인정보 수정 API 요청 DTO
// request DTO = {email, section, type, major, attendance, grade}
// response 200 DTO = {userId, email, section, type, major, attendance, grade, sort}
// response 400 DTO = {message}
export class ModifyRequestDTO {
    constructor(email, section, type, major, attendance, grade) {
        this.email = email
        this.section = section
        this.type = type
        this.major = major
        this.attendance = attendance
        this.grade = grade
    }
}

export class ModifyResponseDTO {
    constructor(userId, email, section, type, major, attendance, grade, sort) {
        this.userId = userId
        this.email = email
        this.section = section
        this.type = type
        this.major = major
        this.attendance = attendance
        this.grade = grade
        this.sort = sort
    }
}

// 개인정보 조회 API 응답 DTO
// response 200 DTO = {email, section, type, major, attendance, grade}
// response 400 DTO = {message}
export class InfoResponseDTO {
    constructor(email, section, type, major, attendance, grade) {
        this.email = email
        this.section = section
        this.type = type
        this.major = major
        this.attendance = attendance
        this.grade = grade
    }
}