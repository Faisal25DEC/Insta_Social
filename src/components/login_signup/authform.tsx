import { Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SigningIn, SigningUp } from "../../redux/user/userAction";
import { Dispatch } from "redux";

const AuthForm = () => {
	type InputData = {
		email: string;
		userName: string;
		name: string;
		password: string;
	  };

	const [isLogin, setIsLogin] = useState(true);
	const navigate = useNavigate();
	const dispatch:Dispatch=useDispatch();
	const [inputs, setInputs] = useState<InputData>({
        email: "",
        userName:"",
		name:"",
		password: ""
		
	});

	const sign=()=>{
		// if(isLogin){
        //     dispatch(SigningIn(inputs));
        // }
        // else{
        //     dispatch(SigningUp(inputs))
        // }
	}

	return (
		<>
			<Box border={".4px solid gray"} borderRadius={4} padding={5}>
				<VStack spacing={4}>
					<Image src='https://res.cloudinary.com/dusavcufz/image/upload/v1698468645/x6aepgng7ovirp3tor50.png' h={24} cursor={"pointer"} alt='Instagram' />
					<Input
						placeholder='Email'
						fontSize={14}
						type='email'
						value={inputs.email}
						onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
					/>
					<Input
						placeholder='Password'
						fontSize={14}
						type='password'
						value={inputs.password}
						onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
					/>

					{!isLogin ? (<>
						<Input
							placeholder='Full Name'
							value={inputs.name}
							onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
							fontSize={14}
							type='text'
						/>
						<Input
							placeholder='Username'
							value={inputs.userName}
							onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
							fontSize={14}
							type='text'
						/>
                        </>
					) : null}

					<Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14} onClick={sign}>
						{isLogin ? "Log in" : "Sign Up"}
					</Button>

					<Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
						<Box flex={2} h={"1px"} bg={"gray.400"} />
						<Text mx={1} color={"black"}>
							OR
						</Text>
						<Box flex={2} h={"1px"} bg={"gray.400"} />
					</Flex>

					<Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
						<Image src='https://res.cloudinary.com/dusavcufz/image/upload/v1698468993/tcavtkjymcfeum31lbsf.png' w={5} alt='Google logo' />
						<Text mx='2' color={"blue.500"}>
							Log in with Google
						</Text>
					</Flex>
				</VStack>
			</Box>

			<Box border={"1px solid gray"} borderRadius={4} padding={5}>
				<Flex alignItems={"center"} justifyContent={"center"}>
					<Box mx={2} fontSize={14}>
						{isLogin ? "Don't have an account?" : "Already have an account?"}
					</Box>
					<Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
						{isLogin ? "Sign up" : "Log in"}
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default AuthForm;