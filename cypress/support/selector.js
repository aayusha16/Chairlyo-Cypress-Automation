export const selector = {

  username: '[name="email"]',
  password: '[name="password"]',
  branch_username: '[name="email"]',
  branch_password: '[name="password"]',
  login_button: '/html/body/div/div/div/div[2]/div/form/button',
  password_visibility: '/html/body/div/div/div/div[2]/div/form/div[1]/div[2]/div/button',
  forgot_password: "//a[@href='/forgot-password']",
  forgot_email: '[name="email"]',
  next_button: '/html/body/div/div/div/div[2]/div/form/button',
  backtologin: '/html/body/div/div/div/div[2]/div/div[3]/a',

  AddBranch: "//button[contains(., 'Add Branch')]",

  branchname: '[name="name"]',
  Slug_field: '[name="slug"]',

  country_select: '//*[@id="root"]/div/div[2]/main/div/div[2]/div/form/div/div/div/div[3]/div/div/div',

  country_search: '/html/body/div[2]/div/div/div[1]/div/input',

  phone_num: '[name="phone"]:eq(0)',
  branch_email: '[name="email"]',
  branch_address: '[name="address"]',

  status: '/html/body/div/div/div[2]/main/div/div[2]/div/form/div/div/div/div[5]/button',

  timezone: '/html/body/div/div/div[2]/main/div/div[2]/div/form/div/div/div/div[7]/div/button/span',
  timezone_search:'/html/body/div[2]/div/div/div[1]/input',

  AdminFirstName: '[name="admin_first_name"]',
  AdminLastName: '[name="admin_last_name"]',
  AdminEmail: '[name="admin_email"]',
  AdminPass: '[name="admin_password"]',

  admin_country_select: '/html/body/div/div/div[2]/main/div/div[2]/div/div/div/form/div/div[5]/div/div',
  admin_country_search:'/html/body/div[2]/div/div/div[1]/div/input',
  AdminPhone: '[name="phone"]:eq(1)',
  Save_button:'/html/body/div/div/div[2]/main/div/div[1]/div[2]/div/div/button[1]',
  back_button: '/html/body/div/div/div[2]/main/div/div[1]/div[1]/button',
  cancel_button: '/html/body/div/div/div[2]/main/div/div[1]/div[2]/div/div/button[2]',
    waiting_tab:
    '//*[@id="root"]/div/div[1]/aside/div[2]/div[2]/nav/div[1]/a',

  add_waiting_button:
    "//button[contains(normalize-space(), 'Add Waiting')]",

  add_waiting_title:
    "//h2[contains(normalize-space(), 'Add Customer To Waiting')]"
};