export const selector = {

  
  username: '[name="email"]',
  password: '[name="password"]',

  branch_username: '[name="email"]',
  branch_password: '[name="password"]',

  login_button:'/html/body/div/div/div/div[2]/div/form/button',

  password_visibility: '/html/body/div/div/div/div[2]/div/form/div[1]/div[2]/div/button',

  forgot_password: "//a[@href='/forgot-password']",
  forgot_email:'[name="email"]',
  next_button:'/html/body/div/div/div/div[2]/div/form/button',

  backtologin:
    '/html/body/div/div/div/div[2]/div/div[3]/a',
   AddBranch: "//button[contains(., 'Add Branch')]",

  branchname:'[name="name"]',
  Slug_field: '[name="slug"]',

  country_select: '//*[@id="root"]/div/div[2]/main/div/div[2]/div/form/div/div/div/div[3]/div/div/div',

  country_search:'/html/body/div[2]/div/div/div[1]/div/input',

  phone_num:'[name="phone"]:eq(0)',

  branch_email:'[name="email"]',
  branch_address:'[name="address"]',
  status: '/html/body/div/div/div[2]/main/div/div[2]/div/form/div/div/div/div[5]/button',
  timezone:'/html/body/div/div/div[2]/main/div/div[2]/div/form/div/div/div/div[7]/div/button/span',

  timezone_search:'/html/body/div[2]/div/div/div[1]/input',

  AdminFirstName:'[name="admin_first_name"]',

  AdminLastName: '[name="admin_last_name"]',

  AdminEmail: '[name="admin_email"]',

  AdminPass:'[name="admin_password"]',

  admin_country_select:'/html/body/div/div/div[2]/main/div/div[2]/div/div/div/form/div/div[5]/div/div',

  admin_country_search: '/html/body/div[2]/div/div/div[1]/div/input',

  AdminPhone: '[name="phone"]:eq(1)',

  Save_button: '/html/body/div/div/div[2]/main/div/div[1]/div[2]/div/div/button[1]',

  back_button: '/html/body/div/div/div[2]/main/div/div[1]/div[1]/button',

  cancel_button: '/html/body/div/div/div[2]/main/div/div[1]/div[2]/div/div/button[2]',
  waiting_tab: '//*[@id="root"]/div/div[1]/aside/div[2]/div[2]/nav/div[1]/a',

  add_waiting_button: "//button[contains(normalize-space(), 'Add Waiting')]",

  add_waiting_title: "//h2[contains(normalize-space(), 'Add Customer To Waiting')]",
  customer_search:"/html/body/div[3]/form/div[2]/div/div[1]/div/div/input",
  valid_customer_waiting: "/html/body/div[3]/form/div[2]/div/div[1]/div/div[2]/button[1]",
  waiting_next_button: "/html/body/div[3]/form/div[3]/button[2]",
  add_another_service: "//*[@id='root']/div/div[2]/main/div/div/div[2]/div/form/div[1]/div[3]/button",
  service_name: "//span[contains(normalize-space(), 'Noel Olsen')]",
  done_button:"//button[contains(normalize-space(), 'Done')]",

  assign_staff_dropdown: "//button[.//span[contains(normalize-space(), 'Select staff to apply to every service')]]",
  staff_option: "//*[normalize-space()='Tyler Diaz']",
  
  add_to_waiting_button:"//button[contains(normalize-space(), 'Add to waiting')]",
  billing_dropdown: '//*[@id="root"]/div/div[1]/aside/div[2]/div[2]/nav/div[4]/div/button/span[2]',
  billing_submenu: '//*[@id="root"]/div/div[1]/aside/div[2]/div[2]/nav/div[4]/div/div/div/a[1]',
  billing_title: '//*[@id="root"]/div/div[2]/main/div/div[1]/div[1]/div[1]/h2',
  billing_search: '//*[@id="root"]/div/div[2]/main/div/div[1]/div[2]/div/div/div[1]/input',
  bill_status_filter: '/html/body/div/div/div[2]/main/div/div[1]/div[2]/div/div/div[2]/button',
  paid_filter: "//div[normalize-space()='Paid']",
  pending_filter: "//div[normalize-space()='Pending']",
  make_payment: '//*[@id="root"]/div/div[2]/main/div/div[2]/div/div/div/table/tbody/tr[3]/td[10]/div/button[1]',
  process_button: '//button[@type="submit" and starts-with(normalize-space(), "Process")]',
session_tab: '//span[normalize-space()="Sessions"]',
new_session_button: '//button[normalize-space()="New Session"]',
session_customer_search: '//input[@placeholder="Enter name or phone number"]',
session_customer_option: '//button[@type="button" and .//span[contains(normalize-space(), "Lisbon Teresa")]]',
session_next_button: '//button[@type="submit" and normalize-space()="Next"]',
add_first_service: '//button[.//span[normalize-space()="Add your first service"]]',
service_search: '//input[@placeholder="Search..."]',
service_option: '//div[@role="option" and .//span[normalize-space()="Hair salon"]]',
done_button: '//button[normalize-space()="Done"]',
select_staff: '//span[normalize-space()="Select Staff"]',
staff_option: '//span[normalize-space()="Tyler Diaz"]',
add_to_session_button: '//button[normalize-space()="Add to Session"]',
};