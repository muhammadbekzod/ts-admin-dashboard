import {
  Avatar,
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Typography,
} from "@mui/joy";
import { Container } from "../styles";
import { useNavigate } from "react-router-dom";

const JobOfferDetail = () => {
  let navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <Container $primary>
      <Box
        component="main"
        className="MainContent"
        sx={{
          px: { xs: 2, md: 6 },
          pt: {
            xs: "calc(12px + var(--Header-height))",
            sm: "calc(12px + var(--Header-height))",
            md: 3,
          },
          pb: { xs: 2, sm: 2, md: 3 },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          //   minWidth: 0,
          //   gap: 1,
        }}
      >
        <Box>
          <Stack
            spacing={4}
            sx={{
              display: "flex",
              //   maxWidth: "800px",
              mx: "auto",
              px: { xs: 2, md: 6 },
              py: { xs: 2, md: 3 },
            }}
          >
            <Card>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button>Download CV</Button>
                <Button color="success">Download All Files[zip] </Button>
              </Box>
              {/* <Divider /> */}
              <Stack
                direction="row"
                spacing={3}
                sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
              >
                <Stack spacing={2} sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Avatar sx={{ borderRadius: 0, width: 120, height: 120 }} />
                    <Box sx={{ width: "100%" }}>
                      <Stack
                        sx={{
                          flexDirection: "row",

                          gap: 2,
                          //   alignItems: "center",
                        }}
                      >
                        <Box sx={{ flexGrow: 1 }}>
                          <FormLabel>성</FormLabel>
                          <Input
                            size="sm"
                            placeholder="First name"
                            value="name"
                          />
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                          <FormLabel>명</FormLabel>
                          <Input
                            size="sm"
                            placeholder="First name"
                            value="data"
                          />
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                          <FormLabel>생열월일</FormLabel>
                          <Input
                            size="sm"
                            placeholder="First name"
                            value="data"
                          />
                        </Box>
                      </Stack>
                      <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                        <FormControl>
                          <FormLabel>국적</FormLabel>
                          <Input size="sm" placeholder="-" value="Uzbekistan" />
                        </FormControl>
                        <FormControl sx={{ flexGrow: 1 }}>
                          <FormLabel>주소</FormLabel>
                          <Input
                            size="sm"
                            placeholder="Phone Number"
                            value="address"
                          />
                        </FormControl>
                      </Stack>
                    </Box>
                  </Box>
                  <Stack direction="row" spacing={2}>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>이메일</FormLabel>
                      <Input size="sm" value="benjamin@urconnection.co.kr" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>전화번호</FormLabel>
                      <Input
                        size="sm"
                        placeholder="+9983311133400"
                        value="9983311133400"
                      />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>전화번호 2</FormLabel>
                      <Input
                        size="sm"
                        placeholder="9983322233400"
                        value="9983322233400"
                      />
                    </FormControl>
                  </Stack>
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    Shaxsiy Ma'lumotlar
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Height</FormLabel>
                      <Input size="sm" value="data" placeholder="-" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Weight</FormLabel>
                      <Input size="sm" placeholder="-" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Oyoq Razmer</FormLabel>
                      <Input size="sm" placeholder="-" value="data" />
                    </FormControl>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Qon guruhi</FormLabel>
                      <Input size="sm" placeholder="-" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Din</FormLabel>
                      <Input size="sm" placeholder="-" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Nikoh</FormLabel>
                      <Input size="sm" placeholder="-" value="data" />
                    </FormControl>
                  </Stack>
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    Shoshilinch a'loqa uchun
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <FormControl>
                      <FormLabel>Munosabaat</FormLabel>
                      <Input size="sm" placeholder="Language" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>FIO</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Tug'ilgan sana</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Phone number</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                  </Stack>
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    Kollej
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <FormControl>
                      <FormLabel>Oliygoh nomi</FormLabel>
                      <Input size="sm" placeholder="Language" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Yo'nalish</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Boshlagan sana</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Bitirgan sana</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                  </Stack>
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    University
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <FormControl>
                      <FormLabel>Eng yuqori daraja</FormLabel>
                      <Input size="sm" placeholder="Language" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Oliygoh nomi</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Yo'nalish</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Boshlagan sana</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Bitirgan sana</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                  </Stack>
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    Qo'shimcha ma'lumot
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <FormControl>
                      <FormLabel>Alergiya</FormLabel>
                      <Input size="sm" placeholder="Language" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Uy-joy mulkini turi</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Qarzdorlik haqida</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Qayta turmush qurganmi</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                  </Stack>
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    Chet-el tajribasi:
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <FormControl>
                      <FormLabel>Tashrif buyurgan davlat nami:</FormLabel>
                      <Input size="sm" placeholder="Language" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Qancha vaqt bo'lgan</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Maqsad</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                  </Stack>
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    Til bilish darajasi:
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <FormControl>
                      <FormLabel>Til nomi:</FormLabel>
                      <Input size="sm" placeholder="Language" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Daraja</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Nutuq darajasi</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Yozish va O'qish darajasi</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                  </Stack>
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    Kasbiy Sertifikat
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <FormControl>
                      <FormLabel>Sertifikat Turi:</FormLabel>
                      <Input size="sm" placeholder="Language" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Berilgan joy</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Berilgan sana</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                  </Stack>
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    Hozirgi ish joyi haqida ma'lumot
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <FormControl>
                      <FormLabel>Shirkat nomi:</FormLabel>
                      <Input size="sm" placeholder="Language" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Kirgan sana</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Ishlash davri</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Yo'nalish</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Lavozim</FormLabel>
                      <Input size="sm" placeholder="Address" value="data" />
                    </FormControl>
                  </Stack>
                  <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <Button sx={{ width: 100 }} onClick={handleBackClick}>
                      Back
                    </Button>
                  </Box>
                </Stack>
              </Stack>
            </Card>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default JobOfferDetail;
