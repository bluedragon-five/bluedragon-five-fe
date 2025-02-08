import { LoginRequestDTO, LoginResponseDTO } from "../entities/LoginDTO"
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