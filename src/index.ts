import './styles/style.css';

function readonly(_target: Object, _property: string, descriptor: PropertyDescriptor) {
  descriptor.writable = false;

  return descriptor;
}

// function measure() {
//   return function (target: Object, prop: string, descriptor: TypedPropertyDescriptor<() => number>) {
//     const actualFunction: any = descriptor.value;

//     const withMeasure = () => {
//       const t0 = performance.now();

//       const result = actualFunction.call(this);

//       const t1 = performance.now();
//       console.log(`Call to ${prop} took ${t1 - t0} milliseconds.`)

//       return result;
//     };

//     descriptor.value = withMeasure;
//   }
// }

function log(message: string) {
  return function actualLogDecorator(_target: Object, _property: string, descriptor: TypedPropertyDescriptor<() => number>) {
    const actualFunction = descriptor.value;

    const decoratorFunc = function (this: any) {
      console.log(message);

      return actualFunction.call(this);
    }

    descriptor.value = decoratorFunc;

    return descriptor;
  }
}

class Person {
  firstName = 'Max';
  lastName = 'Schumaher';

  constructor(public dateOfBirth: Date) {}

  @readonly
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  @log("Logging by decorator")
  getAge() {
    const ageDifMs = (Date.now() - this.dateOfBirth.getTime());
    const ageDate = new Date(ageDifMs);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const person = new Person(new Date(1995, 1, 4));

const age = person.getAge();

console.log(age);
