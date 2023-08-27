// Taking readonly clues from this random google result: 
// https://spin.atomicobject.com/2017/08/14/typescript-readonly-intro/
type SchoolDict = { [key: number]: string[] } // grade to list of people
// type SchoolDictReadonly = { readonly [key: number]: readonly string[] } // grade to list of people
export class GradeSchool {
  people:SchoolDict = {} // grade to list of people
  // people:Map<number, string[]> = new Map<number, string[]>();

  roster(): any {
    // return this.people as SchoolDictReadonly -- results in run time error
    let frozenPeople: any = {}
    for (let grade in this.people) {
      frozenPeople[grade] = Object.freeze(frozenPeople[grade])
    }
    return frozenPeople
  }

  add(name:string, classGrade:number) {
    let inGrade = this.people[classGrade]
    if (!inGrade) {
      inGrade = []
    }
    inGrade.push(name)
    this.people[classGrade] = this.sort(inGrade)
  }

  sort(names: string[]): string[] {
      names = names.sort((a:string, b:string) => a.localeCompare(b))
      return names
  }

  grade(classGrade:number): string[] {
    let names = this.people[classGrade]
    if (names) {
      names = this.sort(names)
    } else { names = [] }
    return names
  }

}
