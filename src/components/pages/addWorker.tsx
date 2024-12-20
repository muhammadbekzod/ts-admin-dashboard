import {
  Avatar,
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  Input,
  Option,
  Select,
  Stack,
  SvgIcon,
  Typography,
  styled,
} from "@mui/joy";
import { Container } from "../styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

const useDynamicForms = (initialState: any[]) => {
  const [forms, setForms] = useState(initialState);

  const handleAddForm = (newForm: any) => {
    setForms([...forms, { id: Date.now(), ...newForm }]);
  };

  return [forms, handleAddForm] as const;
};

const AddNewWorker = () => {
  let navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  // Initialize states with the custom hook
  const [languageForms, addLanguageForm] = useDynamicForms([
    {
      language: "",
      level: "",
      speakingLevel: "",
      readingWritingLevel: "",
      file: null,
    },
  ]);

  const [experienceForms, addExperienceForm] = useDynamicForms([
    { country: "", time: "", purpose: "", file: null },
  ]);
  const [certificateForms, addCertificateForms] = useDynamicForms([
    { certificateName: "", place: "", date: "", file: null },
  ]);

  const [workingExperienceForms, addWorkingExperienceForm] = useDynamicForms([
    { place: "", enterDate: "", major: "", position: "", file: null },
  ]);

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
              // px: { xs: 2, md: 6 },
              // py: { xs: 2, md: 3 },
            }}
          >
            <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
              Yangi Ma'lumot Qo'shish
            </Typography>
            <Card>
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
                          <FormLabel>Ism</FormLabel>
                          <Input size="sm" placeholder="Ism" />
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                          <FormLabel>Familya</FormLabel>
                          <Input size="sm" placeholder="Falimya" />
                        </Box>
                        <Box sx={{ flexGrow: 1 }}>
                          <FormLabel>Tug'ilgan kun</FormLabel>
                          <Input size="sm" type="date" />
                        </Box>
                      </Stack>
                      <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                        <FormControl>
                          <FormLabel>Davlat</FormLabel>
                          <Input size="sm" placeholder="-" />
                        </FormControl>
                        <FormControl sx={{ flexGrow: 1 }}>
                          <FormLabel>Manzil</FormLabel>
                          <Input size="sm" placeholder="Manzil" />
                        </FormControl>
                      </Stack>
                    </Box>
                  </Box>
                  <Stack direction="row" spacing={2}>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Email</FormLabel>
                      <Input
                        size="sm"
                        placeholder="benjamin@urconnection.co.kr"
                      />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Telefon nomer</FormLabel>
                      <Input size="sm" placeholder="+9983311133400" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Telefon nomer 2</FormLabel>
                      <Input size="sm" placeholder="9983322233400" />
                    </FormControl>
                  </Stack>
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    Shaxsiy Ma'lumotlar
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Bo'y</FormLabel>
                      <Input size="sm" placeholder="-" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Vazn</FormLabel>
                      <Input size="sm" placeholder="-" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Oyoq Razmer</FormLabel>
                      <Input size="sm" placeholder="-" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Qon guruhi</FormLabel>
                      <Input size="sm" placeholder="-" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Din</FormLabel>
                      <Input size="sm" placeholder="-" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Nikoh</FormLabel>
                      <Input size="sm" placeholder="-" />
                    </FormControl>
                  </Stack>
                  <Stack direction="row" spacing={2}></Stack>
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    Shoshilinch a'loqa uchun
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <FormControl>
                      <FormLabel>Munosabaat</FormLabel>
                      <Input size="sm" placeholder="Language" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>FIO</FormLabel>
                      <Input size="sm" placeholder="Address" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Tug'ilgan sana</FormLabel>
                      <Input size="sm" type="date" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Phone number</FormLabel>
                      <Input size="sm" type="number" />
                    </FormControl>
                  </Stack>
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    Kollej
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <FormControl>
                      <FormLabel>Oliygoh nomi</FormLabel>
                      <Input size="sm" placeholder="Language" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Yo'nalish</FormLabel>
                      <Input size="sm" placeholder="Address" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Boshlagan sana</FormLabel>
                      <Input size="sm" type="date" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Bitirgan sana</FormLabel>
                      <Input size="sm" type="date" />
                    </FormControl>
                  </Stack>
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    University
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <FormControl>
                      <FormLabel>Eng yuqori daraja</FormLabel>
                      <Input size="sm" placeholder="Language" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Oliygoh nomi</FormLabel>
                      <Input size="sm" placeholder="Address" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Yo'nalish</FormLabel>
                      <Input size="sm" placeholder="Address" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Boshlagan sana</FormLabel>
                      <Input size="sm" type="date" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Bitirgan sana</FormLabel>
                      <Input size="sm" type="date" />
                    </FormControl>
                  </Stack>
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    Qo'shimcha ma'lumot
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <FormControl>
                      <FormLabel>Alergiya</FormLabel>
                      <Input size="sm" placeholder="Alergiya" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Uy-joy mulkini turi</FormLabel>
                      <Input size="sm" placeholder="mulk" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
                      <FormLabel>Qarzdorlik haqida</FormLabel>
                      <Input size="sm" placeholder="qarz" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Qayta turmush qurganmi</FormLabel>
                      <Select defaultValue="">
                        <Option value="yes">Ha</Option>
                        <Option value="no">Yo'q</Option>
                      </Select>
                    </FormControl>
                  </Stack>
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    Chet-el tajribasi:
                  </Typography>
                  {experienceForms.map((form) => (
                    <Stack
                      key={form.id}
                      direction="row"
                      spacing={2}
                      sx={{ mb: 2 }}
                    >
                      <FormControl sx={{ flexGrow: 1 }}>
                        <FormLabel>Tashrif buyurgan davlat nami:</FormLabel>
                        <Input size="sm" placeholder="Language" />
                      </FormControl>
                      <FormControl sx={{ flexGrow: 1 }}>
                        <FormLabel>Qancha vaqt bo'lgan</FormLabel>
                        <Input size="sm" placeholder="Address" />
                      </FormControl>
                      <FormControl sx={{ flexGrow: 1 }}>
                        <FormLabel>Maqsad</FormLabel>
                        <Select defaultValue="work">
                          <Option value="work">Ish</Option>
                          <Option value="study">O'qish</Option>
                          <Option value="travel">Sayohat</Option>
                          <Option value="other">Boshqa</Option>
                        </Select>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Hujjatni yuklash</FormLabel>
                        <Button
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
                          Upload a file
                          <VisuallyHiddenInput type="file" />
                        </Button>
                      </FormControl>
                    </Stack>
                  ))}
                  <Button
                    variant="outlined"
                    color="neutral"
                    onClick={() =>
                      addExperienceForm({
                        country: "",
                        time: "",
                        purpose: "",
                        file: null,
                      })
                    }
                  >
                    +
                  </Button>
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    Til bilish darajasi:
                  </Typography>
                  {languageForms.map((form) => (
                    <Stack
                      key={form.id}
                      direction="row"
                      spacing={2}
                      sx={{ mb: 2 }}
                    >
                      <FormControl sx={{ flexGrow: 1 }}>
                        <FormLabel>Til nomi:</FormLabel>
                        <Select defaultValue="">
                          <Option value="english">Ingiliz tili</Option>
                          <Option value="korean">Koreys tili</Option>
                        </Select>
                      </FormControl>
                      <FormControl sx={{ flexGrow: 1 }}>
                        <FormLabel>Daraja</FormLabel>
                        <Input size="sm" placeholder="Level" />
                      </FormControl>
                      <FormControl sx={{ flexGrow: 1 }}>
                        <FormLabel>Nutuq darajasi</FormLabel>
                        <Select>
                          <Option value="Beginner">Boshlang'ich</Option>
                          <Option value="Elementary">
                            Boshlang'ichdan yuqori
                          </Option>
                          <Option value="Intermediate">O'rta daraja</Option>
                          <Option value="UpperIntermediate">
                            O'rta darajadan yuqori
                          </Option>
                          <Option value="Fluent">Erkin muloqot</Option>
                        </Select>
                      </FormControl>
                      <FormControl sx={{ flexGrow: 1 }}>
                        <FormLabel>Yozish va O'qish darajasi</FormLabel>
                        <Select>
                          <Option value="Beginner">Boshlang'ich</Option>
                          <Option value="Elementary">
                            Boshlang'ichdan yuqori
                          </Option>
                          <Option value="Intermediate">O'rta daraja</Option>
                          <Option value="UpperIntermediate">
                            O'rta darajadan yuqori
                          </Option>
                          <Option value="Fluent">Erkin o'qish va yozish</Option>
                        </Select>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Hujjatni yuklash</FormLabel>
                        <Button
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
                          Upload a file
                          <VisuallyHiddenInput type="file" />
                        </Button>
                      </FormControl>
                    </Stack>
                  ))}

                  <Button
                    variant="outlined"
                    color="neutral"
                    onClick={() =>
                      addLanguageForm({
                        language: "",
                        level: "",
                        speakingLevel: "",
                        readingWritingLevel: "",
                        file: null,
                      })
                    }
                  >
                    +
                  </Button>
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    Kasbiy Sertifikat
                  </Typography>
                  {certificateForms.map((form) => (
                    <Stack
                      key={form.id}
                      direction="row"
                      spacing={2}
                      sx={{ mb: 2 }}
                    >
                      <FormControl>
                        <FormLabel>Sertifikat Turi:</FormLabel>
                        <Input size="sm" placeholder="Sertifikat Turi" />
                      </FormControl>
                      <FormControl sx={{ flexGrow: 1 }}>
                        <FormLabel>Berilgan joy</FormLabel>
                        <Input size="sm" placeholder="Berilganm joy" />
                      </FormControl>
                      <FormControl sx={{ flexGrow: 1 }}>
                        <FormLabel>Berilgan sana</FormLabel>
                        <Input size="sm" type="date" />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Hujjatni yuklash</FormLabel>
                        <Button
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
                          Upload a file
                          <VisuallyHiddenInput type="file" />
                        </Button>
                      </FormControl>
                    </Stack>
                  ))}
                  <Button
                    variant="outlined"
                    color="neutral"
                    onClick={() =>
                      addCertificateForms({
                        certificateName: "",
                        place: "",
                        date: "",
                        file: null,
                      })
                    }
                  >
                    +
                  </Button>
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                    Ish joyi haqida ma'lumot
                  </Typography>
                  {workingExperienceForms.map((form) => (
                    <Stack
                      key={form.id}
                      direction="row"
                      spacing={2}
                      sx={{ mb: 2 }}
                    >
                      <FormControl>
                        <FormLabel>Shirkat nomi:</FormLabel>
                        <Input size="sm" placeholder="Language" />
                      </FormControl>
                      <FormControl sx={{ flexGrow: 1 }}>
                        <FormLabel>Kirgan sana</FormLabel>
                        <Input size="sm" type="date" />
                      </FormControl>
                      <FormControl sx={{ flexGrow: 1 }}>
                        <FormLabel>Ishlash davri (yil)</FormLabel>
                        <Input size="sm" type="number" />
                      </FormControl>
                      <FormControl sx={{ flexGrow: 1 }}>
                        <FormLabel>Yo'nalish</FormLabel>
                        <Input size="sm" placeholder="Address" />
                      </FormControl>
                      <FormControl sx={{ flexGrow: 1 }}>
                        <FormLabel>Lavozim</FormLabel>
                        <Input size="sm" placeholder="Address" />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Hujjatni yuklash</FormLabel>
                        <Button
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
                          Upload a file
                          <VisuallyHiddenInput type="file" />
                        </Button>
                      </FormControl>
                    </Stack>
                  ))}
                  <Button
                    variant="outlined"
                    color="neutral"
                    onClick={() =>
                      addWorkingExperienceForm({
                        place: "",
                        enterDate: "",
                        major: "",
                        position: "",
                        file: null,
                      })
                    }
                  >
                    +
                  </Button>
                  <Box sx={{ display: "flex", justifyContent: "end", gap: 2 }}>
                    <Button sx={{ width: 100 }} onClick={handleBackClick}>
                      Back
                    </Button>
                    <Button sx={{ width: 100 }} color="success">
                      Done
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

export default AddNewWorker;
