import { Box, Button, FormControl, FormLabel, Input } from "@mui/joy";
import SvgIcon from "@mui/joy/SvgIcon";
import { styled } from "@mui/joy";
import { Link } from "react-router-dom";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const RegisterComponent = () => {
  return (
    <>
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
          gap: 2,
        }}
      >
        <Box>
          {/* company name */}
          <FormLabel>회사 이름:</FormLabel>
          <Input placeholder="회사 이름:" sx={{ width: "280px" }} />
        </Box>
        <Box>
          {/* comapny phone number */}
          <FormLabel>회사 전화:</FormLabel>
          <Input placeholder="회사 전화:" sx={{ width: "280px" }} />
        </Box>
        <Box>
          {/* menjer phone number*/}
          <FormLabel>담당자 이름:</FormLabel>
          <Input placeholder="담당자 이름:" sx={{ width: "280px" }} />
        </Box>
        <Box>
          {/* menjer phone number*/}
          <FormLabel>담당자 전화:</FormLabel>
          <Input placeholder="담당자 전화:" sx={{ width: "280px" }} />
        </Box>
        <Box>
          {/* comapny address */}
          <FormLabel>회사 주소:</FormLabel>
          <Input placeholder="회사 주소:" sx={{ width: "280px" }} />
        </Box>
        <Box sx={{ width: "280px" }}>
          {/* Email */}
          <FormLabel>사업자등력번호 파일:</FormLabel>
          <Button
            sx={{ width: "280px" }}
            component="label"
            role={undefined}
            tabIndex={-1}
            variant="outlined"
            color="neutral"
            startDecorator={
              <SvgIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
              </SvgIcon>
            }
          >
            파일 업로드
            <VisuallyHiddenInput type="file" />
          </Button>
        </Box>
        <Box>
          {/* Email */}
          <FormLabel>이메일:</FormLabel>
          <Input placeholder="이메일:" sx={{ width: "280px" }} />
        </Box>

        <Box>
          {/* Password */}
          <FormLabel>비밀번호:</FormLabel>
          <Input placeholder="비밀번호:" sx={{ width: "280px" }} />
        </Box>
        <Box>
          {/* Password */}
          <FormLabel>비밀번호 확인:</FormLabel>
          <Input placeholder="비밀번호 확인" sx={{ width: "280px" }} />
        </Box>
        <Box sx={{ display: "grid", gap: 1, width: "280px", mt: 1 }}>
          {/* login */}
          <Link to={"/"}>
            <Button variant="solid" sx={{ width: "280px" }}>
              완료
            </Button>
          </Link>
          {/* register */}
        </Box>
      </FormControl>
    </>
  );
};

export default RegisterComponent;
