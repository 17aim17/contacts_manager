import _ from 'lodash'
const filterObject = (data) => {

    const {
        firstName,
        middleName,
        lastName,
        company,
        department,
        jobTitle,
        phone,
        email,
        address,
        events,
        website,
        notes } = data;

    const newFirstName = trimString(firstName)
    newFirstName ? data['firstName'] = newFirstName : delete data['firstName']

    const newMiddleName = trimString(middleName);
    newMiddleName ? data['middleName'] = newMiddleName : delete data['middleName']

    const newLastName = trimString(lastName)
    newLastName ? data['lastName'] = newLastName : delete data['lastName']

    const newCompany = trimString(company)
    newCompany ? data['company'] = newCompany : delete data['company']

    const newDepartment = trimString(department)
    newDepartment ? data['department'] = newDepartment : delete data['department']

    const newJobTitle = trimString(jobTitle)
    newJobTitle ? data['jobTitle'] = newJobTitle : delete data['jobTitle']

    const newNotes = trimString(notes)
    newNotes ? data['notes'] = newNotes : delete data['notes']

    const newPhone = removeUndefined(phone)
    newPhone ? data['phone'] = newPhone : delete data['phone']

    const newEmail = removeUndefined(email)
    newEmail ? data['email'] = newEmail : delete data['email']

    const newAddress = removeUndefined(address)
    newAddress ? data['address'] = newAddress : delete data['address']

    const newEvent = removeUndefined(events)
    newEvent ? data['events'] = newEvent : delete data['events']

    const newWebsite = removeUndefined(website)
    newWebsite ? data['website'] = newWebsite : delete data['website']


    return data

}

const trimString = (str) => {
    if (str) {
        const newStr = str.trim();
        if (str.length > 0) return newStr
        else return undefined
    }
    return undefined
}

const removeUndefined = (arr) => {
    if (arr) {

        for (let i = 0; i < arr.length; i++) {
            let obj = arr[i]
            if (typeof obj === 'object') {
                for (let key in obj) {
                    const newVal = trimString(obj[key])
                    newVal ? obj[key] = newVal : delete obj[key]
                }

                if (_.isEmpty(obj)) {
                    arr[i] = undefined
                }
            }

        }

        const newArr = arr.filter(value => value !== undefined)
        if (newArr.length > 0) {
            return newArr
        }
        else { return undefined }

    }
    return undefined

}
export { filterObject }

