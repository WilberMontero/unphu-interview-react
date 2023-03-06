

export function validateIdentification(cedula: string): boolean {
    // Eliminar los guiones y espacios en blanco de la cédula
    cedula = cedula.replace(/[-\s]/g, '');
  
    // Comprobar que la cédula tiene 11 dígitos
    if (cedula.length !== 11) {
      return false;
    }
  
    return true;
  }

 export function validatePhone(phone: string): boolean {
    // Eliminar los guiones, paréntesis y espacios en blanco del número de teléfono
    phone = phone.replace(/[-()\s]/g, '');
  
    // Comprobar que el número de teléfono tiene 10 dígitos
    if (phone.length !== 10) {
      return false;
    }
  
    // Comprobar que el número de teléfono comienza con "809", "829" o "849"
    const codigoArea = phone.substr(0, 3);
    if (codigoArea !== '809' && codigoArea !== '829' && codigoArea !== '849') {
      return false;
    }
  
    // Comprobar que todos los caracteres restantes son dígitos
    const digitos = phone.substr(3);
    return /^\d+$/.test(digitos);
  }

 export function validateEmail(email: string): boolean {
    // Comprobar que el correo electrónico tiene un formato válido
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!patron.test(email)) {
      return false;
    }
  
    // Comprobar que el correo electrónico no tiene más de 256 caracteres
    if (email.length > 256) {
      return false;
    }
  
    return true;
  }

  export function validateBirthDate(birthDate: string): boolean {
    // Comprobar que la fecha tiene un formato válido
    const pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    if (!pattern.test(birthDate)) {
      return false;
    }
  
    // Convertir la fecha a un objeto Date
    const parts = birthDate.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    const dateObj = new Date(year, month, day);
  
    // Comprobar que la fecha es válida
    if (isNaN(dateObj.getTime())) {
      return false;
    }
  
    // Comprobar que la fecha es anterior a la fecha actual
    const currentDate = new Date();
    if (dateObj.getTime() >= currentDate.getTime()) {
      return false;
    }
  
    return true;
  }