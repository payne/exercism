export class GradeSchool {
  // people:any = {} // grade to list of people
  people:Map<number, string[]> = new Map<number, string[]>();

  roster() {
    return this.people
    /*
    for (let classGrade of this.people.keys()) {
      this.grade(classGrade)
    }
    */
  }

  add(name:string, classGrade:number) {
    let inGrade = this.people.get(classGrade)
    if (!inGrade) {
      inGrade = []
    }
    inGrade.push(name)
    this.people.set(classGrade, inGrade)
  }

  grade(classGrade:number): string[] {
    return this.people.get(classGrade) as string[];
  }
}
