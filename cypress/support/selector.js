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
  timezone_search: '/html/body/div[2]/div/div/div[1]/input',

  AdminFirstName: '[name="admin_first_name"]',
  AdminLastName: '[name="admin_last_name"]',
  AdminEmail: '[name="admin_email"]',
  AdminPass: '[name="admin_password"]',

  admin_country_select: '/html/body/div/div/div[2]/main/div/div[2]/div/div/div/form/div/div[5]/div/div',
  admin_country_search: '/html/body/div[2]/div/div/div[1]/div/input',
  AdminPhone: '[name="phone"]:eq(1)',

  Save_button: '/html/body/div/div/div[2]/main/div/div[1]/div[2]/div/div/button[1]',
  back_button: '/html/body/div/div/div[2]/main/div/div[1]/div[1]/button',
  cancel_button: '/html/body/div/div/div[2]/main/div/div[1]/div[2]/div/div/button[2]',

  waiting_tab: '//a[.//span[normalize-space()="Waiting"] or normalize-space()="Waiting"]',

add_waiting_button: '//button[contains(normalize-space(), "Add Waiting")]', 

add_waiting_title: '//h2[contains(normalize-space(), "Add Customer To Waiting")]', 

customer_search: '//input[@placeholder="Enter name or phone number"]',

valid_customer_waiting: '//button[@data-index="0" and .//span[normalize-space()="Teresa Lisbon"]]', 

waiting_next_button: '//button[@type="submit" and normalize-space()="Next"]',

add_another_service: '//button[contains(normalize-space(), "Add Another Service")]', 

service_search: '//input[@placeholder="Search..."]',

service_name: '//span[contains(@class,"truncate") and normalize-space()="Aurelia Hammond"]',

done_button: '//button[normalize-space()="Done"]',

staff_dropdown: '//button[@role="combobox" and .//span[normalize-space()="Select Staff"]]', 

staff_option: '//span[normalize-space()="Luke Waller"]',

add_to_waiting_button: '//button[contains(normalize-space(), "Add to waiting")]',

  billing_dropdown: '//*[@id="root"]/div/div[1]/aside/div[2]/div[2]/nav/div[4]/div/button/span[2]',
  billing_submenu: '//*[@id="root"]/div/div[1]/aside/div[2]/div[2]/nav/div[4]/div/div/div/a[1]',
  billing_title: '//*[@id="root"]/div/div[2]/main/div/div[1]/div[1]/div[1]/h2',
  billing_search: '//*[@id="root"]/div/div[2]/main/div/div[1]/div[2]/div/div/div[1]/input',
  bill_status_filter: '/html/body/div/div/div[2]/main/div/div[1]/div[2]/div/div/div[2]/button',
  paid_filter: "//div[normalize-space()='Paid']",
  pending_filter: "//div[normalize-space()='Pending']",
  make_payment: '//table/tbody/tr/td[10]/div/button[1]',
  process_button: '//button[@type="submit" and starts-with(normalize-space(), "Process")]', 

  session_tab: '//span[normalize-space()="Sessions"]',
  new_session_button: '//button[normalize-space()="New Session"]',
  session_customer_search: '//input[@placeholder="Enter name or phone number"]',
  session_customer_option: "//button[.//span[normalize-space()='Teresa Lisbon']]",
  session_next_button: '//button[@type="submit" and normalize-space()="Next"]',
  add_first_service: "//button[.//span[normalize-space()='Add your first service']]",
  service_search: '//input[@placeholder="Search..."]',
  service_option: "//span[normalize-space()='Aurelia Hammond']",
  done_button: '//button[normalize-space()="Done"]',
  select_staff: '//span[normalize-space()="Select Staff"]',
  staff_option1: "//span[normalize-space()='Luke Waller']",
  add_to_session_button: '//button[normalize-space()="Add to Session"]',

  edit_branch: '//table/tbody/tr/td[9]/div/a[2]',
  delete_branch: '//table/tbody/tr/td[9]/div/div',
  delete_branch_input: '//input[@placeholder="Type Delete Branch here"]',
  confirm_delete_branch: '//button[contains(normalize-space(), "Delete")]', 

  management_dropdown: '//*[@id="root"]/div/div[1]/aside/div[2]/div[3]/nav/div[1]/div/button/span[2]',
  customer_option: '//*[@id="root"]/div/div[1]/aside/div[2]/div[3]/nav/div[1]/div/div/div/a[1]',
  customer_page_title: '//h2[normalize-space()="Customer"]',
  add_customer_button: '//button[normalize-space()="Add Customer"]',

  customer_firstname: '[name="first_name"]',
  customer_lastname: '[name="last_name"]',
  country_dropdown: '//*[@id="root"]/div/div[2]/main/div/div/div[2]/div/div[2]/div[1]/div/div/div',
  country_search_field: '//input[@placeholder="Search Category..."]',
  country_nepal: '//div[@role="option" and @data-value="nepal 977 np"]',

  phone_number_field: '//*[@id="root"]/div/div[2]/main/div/div/div[2]/div/div[2]/div[1]/div/input',
  customer_email: '[name="email"]',

  gender_dropdown: '//*[@id="root"]/div/div[2]/main/div/div/div[2]/div/div[3]/div[1]/button',
  male_option: '//div[@role="option"]//*[normalize-space()="Male"]',
  female_option: '//div[@role="option"]//*[normalize-space()="Female"]',

  date_of_birth_dropdown: '//*[@id="date_of_birth"]',
  customer_address: '[name="address"]',
  save_changes_button: '//button[normalize-space()="Save Changes"]',
  edit_customer_button: '//table/tbody/tr/td[8]/div/a',
  edit_save_changes_button: '//button[normalize-space()="Save Changes"]',

  delete_customer_button: '//table/tbody/tr/td[8]/div/div',
  delete_customer_input: '//input[@placeholder="Type Delete here"]',
  confirm_delete_customer: '//button[normalize-space()="Confirm Delete"]'

};