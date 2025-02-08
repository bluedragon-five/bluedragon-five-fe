import { LoginRequestDTO, LoginResponseDTO, SignupRequestDTO } from "../entities/userDTO"
import { API_BASE_URL, API_BASE_HEADERS } from "../shared/constant"

// 로그인 API 요청 함수
export const login = async (id, password) => {
  try {
    const requestData = new LoginRequestDTO(id, password)
    const requestURL = API_BASE_URL + '/api/user/login'    

    const response = await fetch(requestURL , {
      method: 'POST',
      headers: API_BASE_HEADERS,
      body: JSON.stringify(requestData),
    })

    const data = await response.json()

    if (!response.ok) {
      return new LoginResponseDTO(false, data.message)
    }

    return new LoginResponseDTO(true, '로그인 성공', data.userId)
  } catch (error) {
    console.error('로그인 오류:', error)
    return new LoginResponseDTO(false, '서버 오류 발생')
  }
}

// 회원가입 API 요청 함수
export const register = async (id, password) => {
  try {
    const requestData = new SignupRequestDTO(id, password)
    const requestURL = API_BASE_URL + '/api/user'

    const response = await fetch(requestURL , {
      method: 'POST',
      headers: API_BASE_HEADERS,
      body: JSON.stringify(requestData),
    })

    const data = await response.json()
    console.log(data)

    if (!response.ok) {
      return { success: false, message: data.message }
    }

    return { success: true, id: '1' }
  } catch (error) {
    console.error('회원가입 오류:', error)
    return { success: false, message: '서버 오류 발생' }
  }
}

// 개인정보 수정 API 요청 함수
// DTO : ModifyRequestDTO, ModifyResponseDTO
export const modifyUserInfo = async (userId, email, section, type, major, attendance, grade) => {
  try {
    const requestURL = API_BASE_URL + `/api/user/info?userId=${userId}`
    const requestBody = { email, section, type, major, attendance, grade }

    const response = await fetch(requestURL , {
      method: 'POST',
      headers: API_BASE_HEADERS,
      body: JSON.stringify(requestBody),
    })

    const data = await response.json()

    if (!response.ok) {
      return { success: false, message: data.message }
    }

    return { success: true, ...data }
  } catch (error) {
    console.error('개인정보 수정 오류:', error)
    return { success: false, message: '서버 오류 발생' }
  }
}

// 개인정보 조회 API 요청 함수
// DTO : ModifyResponseDTO
// URL : /api/user/info?userId={userId}
export const getUserInfo = async (userId) => {
  try {
    const requestURL = API_BASE_URL + `/api/user/info?userId=${userId}`

    const response = await fetch(requestURL , {
      method: 'GET',
      headers: API_BASE_HEADERS,
    })

    const data = await response.json()

    if (!response.ok) {
      return { success: false, message: data.message }
    }

    return { success: true, ...data }
  } catch (error) {
    console.error('개인정보 조회 오류:', error)
    return { success: false, message: '서버 오류 발생' }
  }
}