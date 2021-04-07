import faker from 'faker'

const createFakeRowData = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  sentence: faker.address.city(),
  companyName: faker.finance.amount(9000, 10000, 4),
})

export default () => Array.from({ length: 100 }, createFakeRowData)
