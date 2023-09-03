export class GradeSchool {
  // I wish I could do this without `any`
// grade to list of people
  people: {[key: number]: string[]} = {}
  // people:Map<number, string[]> = new Map<number, string[]>();

  roster() {
    let clone = JSON.parse(JSON.stringify(this.people))
    for (let gradeLevel in clone) {
	clone[gradeLevel].freeze
    }
    return clone
  }

  add(name:string, classGrade:number) {
    this.remove(name)
    let inGrade = this.people[classGrade]
    inGrade = inGrade || []
    inGrade.push(name)
    this.people[classGrade] = this.sort(inGrade)
  }

  remove(name: string) {
    for (let gradeLevel in this.people) {
      let students = this.people[gradeLevel]
      students = students.filter((s:string) => s !== name)
      if (students === undefined) { students = [] }
      this.people[gradeLevel] = students
    }
  }

  sort(names: string[]): string[] {
      names = names.sort((a:string, b:string) => a.localeCompare(b))
      return names
  }

  grade(classGrade:number): string[] {
    let names = this.people[classGrade]
    names = names || []
    let clone = JSON.parse(JSON.stringify(names))
    clone = clone || []
    clone = this.sort(clone)
    clone.freeze // this does not return anything
    let result = clone
    result = result || []
    return result
  }

}
