import { ScholarRequestDTO, ScholarResponseDTO } from "../entities/scholarDTO"
import { API_BASE_URL, API_BASE_HEADERS } from "../shared/constant"

// 장학금 검색 API 요청 함수
export const fetchScholarships = async ({section=0, attendance=true, grade=4, type = "NOTHING", major = "NOTHING", sortCondition = "NOTHING"}) => {
  try {
    const requestData = new ScholarRequestDTO(section, attendance, grade, type, major, sortCondition)
    const requestURL = API_BASE_URL + '/api/scholarship'
    console.log(requestData) 

    const response = await fetch(requestURL, {
      method: 'POST',
      headers: API_BASE_HEADERS,
      body: JSON.stringify(requestData),
    })

    const data = await response.json()

    if (!response.ok) {
      return []
    }

    const result = data.scholarships

    return result.map(scholar => new ScholarResponseDTO(scholar.name, scholar.money, scholar.remainDays, scholar.redirectURL))
  } catch (error) {
    console.error('장학금 검색 오류:', error)
    return []
  }
}