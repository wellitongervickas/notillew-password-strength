
# @notillew/password-strength
> Created just for learn and pratices

### Example outputs
    import passwordStrength from '@notillew/password-strength'
    
    expect(passwordStrength(passwordWeak)).toBe('weak')
    expect(passwordStrength(passwordMedium)).toBe('medium')
    expect(passwordStrength(passwordStrong).toBe('strong')

#### Matching 

 - Match by length
 - Match by uppercase and lowercase
 - Match by special characters
 - Match by sequences, like: 123, abc, abc123, a1b2c3, !1a and beyond will decrease password level strength
  

#### Strength score behavior 
3.3 - weak
3.3 ~ 6.6 - medium
6 ~6 - Strong

