import { useForm } from "react-hook-form";
import { css } from "@emotion/react";
import { Box, Button, TextField, Typography, MenuItem } from "@mui/material";

export default function App() {
  const {
          register,
          handleSubmit,
          watch,
          formState: { errors }, } = useForm();

  const onSubmit = (data) => {
     //서버에 데이터를 전송하는 코드
  };
  
  /** @jsxImportSource @emotion/react */

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      css={css`
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      `}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        회원가입
      </Typography>

      <TextField
        fullWidth
        label="이름"
        margin="normal"
        {...register("name", { required: "이름을 입력해주세요." })}
        error={!!errors.name}
        helperText={errors.name?.message}
      />

      <TextField
        fullWidth
        select
        label="성별"
        margin="normal"
        defaultValue=""
        {...register("gender", { required: "성별을 선택해주세요." })}
        error={!!errors.gender}
        helperText={errors.gender?.message}
      >
        <MenuItem value="">선택하세요</MenuItem>
        <MenuItem value="male">남성</MenuItem>
        <MenuItem value="female">여성</MenuItem>
        <MenuItem value="other">기타</MenuItem>
      </TextField>

      <TextField
        fullWidth
        label="이메일"
        type="email"
        margin="normal"
        {...register("email", {
          required: "이메일을 입력해주세요.",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "유효한 이메일 주소를 입력해주세요.",
          },
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        fullWidth
        label="비밀번호"
        type="password"
        margin="normal"
        {...register("password", {
          required: "비밀번호를 입력해주세요.",
          minLength: {
            value: 6,
            message: "비밀번호는 최소 6자 이상이어야 합니다.",
          },
        })}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      <TextField
        fullWidth
        label="비밀번호 확인"
        type="password"
        margin="normal"
        {...register("confirmPassword", {
          required: "비밀번호 확인을 입력해주세요.",
          validate: (value) =>
            value === watch("password") || "비밀번호가 일치하지 않습니다.",
        })}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        css={css`
          margin-top: 20px;
        `}
      >
        회원가입
      </Button>
    </Box>
  );
}