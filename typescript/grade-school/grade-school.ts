export class GradeSchool {
  people:any = {} // grade to list of people
  // people:Map<number, string[]> = new Map<number, string[]>();

  roster() {
    // return this.people
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
    if (classGrade == 1 && name === 'Aimee') console.log('Asking about Amiee: ', inGrade)
    inGrade.push(name)
    this.people[classGrade] = this.sort(inGrade)
    if (classGrade == 1 && name === 'Aimee') console.log('after storing and sorting: Asking about Amiee: ', inGrade)
  }

  remove(name: string) {
    console.log(`start of remove`, JSON.stringify(this.people))
    for (let gradeLevel in this.people) {
      let students = this.people[gradeLevel]
      const oldLen = students.length
      students = students.filter((s:string) => s !== name)
      if (students === undefined) { students = [] }
      this.people[gradeLevel] = students
      if (oldLen != students.length) { 
        console.log(`students.length changed! students=`, students) 
        console.log(JSON.stringify(this.people))
        const grade2  = this.grade(2)
        console.log(`grade2`, grade2)
      }
    }
    console.log(`end of remove`, JSON.stringify(this.people))
  }

  sort(names: string[]): string[] {
      names = names.sort((a:string, b:string) => a.localeCompare(b))
      return names
  }

  grade(classGrade:number): string[] {
    let names = this.people[classGrade]
    names = names || []
    names = this.sort(names)
    let clone = JSON.parse(JSON.stringify(names))
    clone = clone || []
    if (classGrade === 2) { console.log(`clone is`, clone); }
    return clone.freeze
  }

}
