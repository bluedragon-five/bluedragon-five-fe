import { LoginRequestDTO, LoginResponseDTO, SignupRequestDTO } from "../entities/userDTO"
import { API_BASE_URL, API_BASE_HEADERS } from "../shared/constant"

// 로그인 API 요청 함수
export const login = async (id, password) => {
  try {
    const requestData = new LoginRequestDTO(id, password)
    const requestURL = API_BASE_URL + '/api/user/login'    

    // const response = await fetch(requestURL , {
    //   method: 'POST',
    //   headers: API_BASE_HEADERS,
    //   body: JSON.stringify(requestData),
    // })

    // const data = await response.json()

    // if (!response.ok) {
    //   return new LoginResponseDTO(false, data.message)
    // }
    return new LoginResponseDTO(true, '로그인 성공', '1')

    // return new LoginResponseDTO(true, '로그인 성공', data.userId)
  } catch (error) {
    console.error('로그인 오류:', error)
    return new LoginResponseDTO(false, '서버 오류 발생')
  }
}

// 회원가입 API 요청 함수
// request = {loginId, password}
// url = /api/user
// response 200 : {id}
// response 400 : {message}
export const register = async (id, password) => {
  try {
    const requestData = new SignupRequestDTO(id, password)
    const requestURL = API_BASE_URL + '/api/user'

    // const response = await fetch(requestURL , {
    //   method: 'POST',
    //   headers: API_BASE_HEADERS,
    //   body: JSON.stringify(request),
    // })

    // const data = await response.json()

    // if (!response.ok) {
    //   return { success: false, message: data.message }
    // }

    return { success: true, id: '1' }
  } catch (error) {
    console.error('회원가입 오류:', error)
    return { success: false, message: '서버 오류 발생' }
  }
}