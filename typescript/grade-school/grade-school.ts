export class GradeSchool {
  people:any = {} // grade to list of people
  // people:Map<number, string[]> = new Map<number, string[]>();

  roster() {
    return this.people
    /*
    for (let classGrade of this.people.keys()) {
      this.grade(classGrade)
    }
    */
  }

  add(name:string, classGrade:number) {
    let inGrade = this.people[classGrade]
    if (!inGrade) {
      inGrade = []
    }
    inGrade.push(name)
    this.people[classGrade] = inGrade
  }

  grade(classGrade:number): string[] {
    let names = this.people[classGrade]
    if (names) {
      names = names.sort((a:string, b:string) => a.localeCompare(b))
    } else { names = [] }
    return names
  }

}
