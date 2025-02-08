export class ScholarRequestDTO {
    constructor(section=0, attendance=true, grade=4, type = "NOTHING", major = "NOTHING", sortCondition = "NOTHING") {
        this.section = section
        this.type = type
        this.major = major
        this.attendance = attendance
        this.grade = grade
        this.sortCondition = sortCondition
    }
}

export class ScholarResponseDTO {
    constructor(name, money, remainDays, redirectURL) {
        this.name = name
        this.money = money
        this.remainDays = remainDays
        this.redirectURL = redirectURL
    }
}