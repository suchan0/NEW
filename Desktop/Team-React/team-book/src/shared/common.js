export const emailCheck = (email) => {
    let emailreg = /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*/;

    return emailreg.test(email);
}
// 이메일 형식 
export const pwdCheck = (password) => {
    let pwdreg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return pwdreg.test(password);
  };
//   비밀번호 문자와 숫자 합쳐서 8자 이상

export const Nickname = (nickname) => {
    let Nickreg = /^[가-힣a-zA-Z]+$/
  return Nickreg.test(nickname);
};