export class GradeSchool {
  people:any = {} // grade to list of people
  roster() {
    for (let classGrade in this.people) {
      grade(classGrade)
    }
  }

  add(name:string, classGrade:number) {
    let inGrade = this.people[classGrade];
    if (!inGrade) {
      inGrade = []
    }
    inGrade.push(name)
  }

  grade(classGrade:number) {
    return this.people[classGrade];
  }
}
