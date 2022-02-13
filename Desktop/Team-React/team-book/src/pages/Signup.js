import React from "react";
import { Grid, Text, Input, Button } from "../elements";
import { history } from "../redux/configStore";
import { useDispatch } from "react-redux";
import user, { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck, pwdCheck, Nickname  } from "../shared/common";
import axios from 'axios'


const Signup = (props) => {
  const dispatch = useDispatch();
 
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [user_name, setUserName] = React.useState("");

  const onClickEmailCheck = () => {
    
    
      axios
      .post('http://localhost:3003/signup',{
      "email": id,
    })
        .then((res) => {
          if (id === "") {
            alert("이메일을 입력해주세요.");
          } else if (!emailCheck(id)) {
            alert("이메일 형식이 올바르지 않습니다.");
            return;
          } 
          alert(res.data);
     
          return;
        })
        .catch((error) => {
          alert(error.data);
         
        });
    
    console.log(id);
  };
  
  const onClickUsernameCheck = () => {
    
    if (user_name === "") {
      
    } else if (!Nickname(user_name)) {   
      
      return;
    } else {
      axios
      .post('http://localhost:3003/signup',{
      "nickname": user_name,
    })
        .then((res) => {
          alert(res.data);
          
          return;
        })
        .catch((error) => {
          alert(error.data);
          
        });
    }
    console.log(user_name);
  };
  
  const signup = () => {
      
    if (id === "" || pwd === "" || user_name === "") {
        window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
        return;
      }
  
      if(!emailCheck(id)){
        window.alert('이메일 형식이 맞지 않습니다!');
        return;
      }
      if(!pwdCheck(pwd)){
          window.alert('비밀번호 문자와 숫자 8자이상이 아닙니다.');
          return;
      }
      
      if (pwd !== pwd_check) {
        window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
        return;
        }
       dispatch(userActions.signupFB(id, pwd, user_name));
  };
  

 

  return (
      
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          회원가입
        </Text>

        <Grid padding="16px 0px" >
          
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요."
            _onChange={(e) => {
              setId(e.target.value);
            }}  />
            <button width="90px" fs="11px" onClick={onClickEmailCheck}>
            중복확인
          </button>
        
        </Grid>

        <Grid padding="16px 0px">
        <Input label="닉네임"
            placeholder="닉네임을 입력해주세요."
            _onChange={(e) => {
              setUserName(e.target.value);
            }}
            />
               <button width="90px" fs="11px" onClick={onClickUsernameCheck}>
          중복확인
        </button>	
      </Grid>
       
        <Grid padding="16px 0px">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>

        <Grid padding="16px 0px">
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            _onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          />
        </Grid>
        <Button text="회원가입하기" _onClick={() => {
            signup();
        }}></Button>
      </Grid>
    </React.Fragment>
  );
};

Signup.defaultProps = {};

export default Signup;