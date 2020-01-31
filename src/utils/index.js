
const filterObject = (data) => {

    const { phone, email, address, events, website } = data;

    const newPhone = removeUndefined(phone)

    newPhone ? data[phone] = newPhone : delete data['phone']

    const newEmail = removeUndefined(email)
    newEmail ? data[email] = newEmail : delete data['email']

    const newAddress = removeUndefined(address)
    newAddress ? data[address] = newAddress : delete data['address']

    const newEvent = removeUndefined(events)
    newEvent ? data[events] = newEvent : delete data['events']

    const newWebsite = removeUndefined(website)
    newWebsite ? data[website] = newWebsite : delete data['website']


    return data

}

const removeUndefined = (arr) => {
    if (arr) {
        const newArr = arr.filter(value => value !== undefined)

        if (newArr.length > 0) return newArr
        else return undefined

    }
    return undefined

}
export { filterObject }

