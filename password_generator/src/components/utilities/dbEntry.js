/**
 * Record the requests and resulting passwords (encrypted with bcrypt) to make sure duplicated passwords never occur
 * 
 */

import sqlite from 'sqlite3'
import bcrypt from 'bcrypt'

const dbPath = '../../../../db/collect_passwords.db'

const dbConnection = new sqlite.Database(dbPath)

const createDatabase = (dbPath=dbPath) => {
    const tableCreation = 'CREATE TABLE if not exists passwords (Length INTEGER, UpperCaseLetters INTEGER, LowerCaseLetters INTEGER, Numbers INTEGER, NonAlphaNumeric INTEGER, Password TEXT)'
    dbConnection.run(tableCreation);
}

createDatabase();

const checkUniquePassword = (pw) => {
    const encryptedPw = bcrypt.hash(pw, 10, (err, hash) => {
        if(err){
            throw err;
        } else {
            return hash;
        }
    })
    const query = `Select * from passwords where Password = \'${encryptedPw}\'`
}

const insertPassword = (obj) => {
    const insertQuery = ``
}


module.exports = {
    "checkUniquePassword":checkUniquePassword,
    "insertPassword":insertPassword
}