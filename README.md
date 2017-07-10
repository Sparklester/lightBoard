# LightBoard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

# DISSENY
Respecte al disseny hi han altres components com ara el login de l'inici i la barra de navegació.

# ESTRUCTURA 
Hem dividit l'aplicació en tres parts: la configuració de les sortides, la programació (drag and drop) del control de llums i el propi control.

## Classes
### Element
Permetrà configurar tots els elements connectats a la taula de llums. Tindrà els següents atributs: 
    - [type]: llista de les característiques de cada dispositiu.
    - [output-pin]: número pin de la placa al qual s'assignarà el dispositiu.
    - [name]: El nom que es vol posar al dispositiu.
    
## Components

### [conf-output] - Configuració d'una sortida. 
- Permetrà configurar una sortida de tipus [Element]. El component tindrà:
    - @Input <el> de tipus element.

### [conf-outputs] - Configuració de totes les sortides.
- Configuració de sortida dels dispositius: component que integrarà una sèrie de configuracions de sortida. Utilitzarà la classe Element.
    - @Output <currentEl> de tipus element.
    - [Element] per desar totes les sortides.
    - config: json de configuració extret del servidor.
    - currentEl: variable que ens indica l'element actual.
    

```javascript
  {"type": ["light bulb","led","speaker","fan"]
  "config":{ 
      13: { },
      14: { },
  }
  ```
    
