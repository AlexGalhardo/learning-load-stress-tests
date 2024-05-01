const firstNames = [
    'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Charles', 'Thomas',
    'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen',
];

const lastNames = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson',
    'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White',
];

export function generateRandomFullName() {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
}

export function generateRandomEmail(fullName) {
  return `${fullName.
              toLowerCase()
              .split(' ')
              .join('.')
            }.${
              Math.floor(Math.random() * (9999 - 999 + 1)) + 999
            }@gmail.com`;
}

export function generateRandomPassword(length = 8) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericChars = '0123456789';
    const specialChars = '@$!%*?&';

    const allChars = lowercaseChars + uppercaseChars + numericChars + specialChars;

    let password = '';

    function getRandomChar(characters) {
      return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    password += getRandomChar(lowercaseChars);
    password += getRandomChar(uppercaseChars);
    password += getRandomChar(numericChars);
    password += getRandomChar(specialChars);

    for (let i = 4; i < length; i++) {
        password += getRandomChar(allChars);
    }

    return password.split('').sort(() => 0.5 - Math.random()).join('');
}