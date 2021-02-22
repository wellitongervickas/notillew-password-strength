
# @notillew/password-strength
[![CI](https://github.com/wellitongervickas/notillew-password-strength/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/wellitongervickas/notillew-password-strength/actions/workflows/main.yml)

+ Created just for learn and pratices
+ Typescript
+ Lodash 
+ Functional Programming

### Install

> yarn add @notillew/password-strength
> 
> npm install @notillew/password-strength


### Run tests

> yarn test
> 
> yarn test:watch

### Example outputs
    import passwordStrength from '@notillew/password-strength'
    
    expect(passwordStrength(passwordWeak)).toBe('weak')
    expect(passwordStrength(passwordMedium)).toBe('medium')
    expect(passwordStrength(passwordStrong)).toBe('strong')

### Matching 

 - Length
 - Uppercase and lowercase
 - Special characters
 - Sequences, like: 123, abc, abc123, a1b2c3 and beyond will decrease password level strength
  

#### Behavior 
> Score should be 0 to 10
#### Table

> \< 4 weak
> 
> \>= 4 medium
> 
> \>= 8 Strong

