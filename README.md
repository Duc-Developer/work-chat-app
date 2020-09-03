Work-chat-app là 1 ứng dụng chat bao gồm các chức năng:

- Đăng nhập, đăng ký người dùng: sử dụng mã hóa md5 và firebase realtime để lưu trữ dữ liệu
- Kết bạn bằng id cá nhân, cập nhật profile qua form, cập nhật avatar, name, tel,...
- Chat realtime thông qua realtime firebase, gửi ảnh, thống kê ảnh của 1 chat box, lưu trữ ảnh thông qua firebase storage.
- Tìm kiếm box chat thông qua tên người dùng và nhiều tính năng khác,...

Lộ trình build app bao gồm:

- Tạo page đăng ký, đăng nhập người dùng sử dụng back end là firebase realtime
- Tạo room chat sử dụng firebase realtime
- Tạo lưu trữ dùng trong việc post image, file từ người dùng sử dụng firebase storage

Main Developer: DucJS Developer

//////////////////////////////////////////////////////////////////

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
