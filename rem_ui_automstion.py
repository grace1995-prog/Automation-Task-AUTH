from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()
driver.get("https://esmee-admin.vercel.app/login")
driver.implicitly_wait(30)
driver.maximize_window()

# ===== TEST 1: Empty Email and Password =====
driver.find_element(By.ID, "exampleInputEmail1").send_keys("")
driver.find_element(By.ID, "exampleInputPassword1").send_keys("")
driver.find_element(By.XPATH, "//button[normalize-space()='Login']").click()
time.sleep(5)
error_text = driver.find_element(By.XPATH, "//div[contains(text(),'Please input a valid email')]").text

if error_text.strip().lower() == "Please input a valid email":
    print("Test 2 Passed: Correct error message displayed")
else:
    print("Test 2 Failed: Incorrect or no error message")
time.sleep(5)
print("Test 2: Invalid login done")
driver.refresh()

# ===== TEST 2: Valid Login =====
driver.find_element(By.XPATH, "//input[@id='exampleInputEmail1']").send_keys("superadmin@emsee.com")
time.sleep(5)
driver.find_element(By.XPATH, "//input[@id='exampleInputPassword1']").send_keys("9LPo099TPOK")
time.sleep(5)
driver.find_element(By.XPATH, "//button[normalize-space()='Login']").click()
print("Test 1: Valid login done")
driver.refresh()

# ===== TEST 3: Create Item(Bank)=====

driver.find_element(By.XPATH, "//input[@id='exampleInputEmail1']").send_keys("superadmin@emsee.com")
time.sleep(5)
driver.find_element(By.XPATH, "//input[@id='exampleInputPassword1']").send_keys("9LPo099TPOK")
time.sleep(5)
driver.find_element(By.XPATH, "//button[normalize-space()='Login']").click()
time.sleep(10)
driver.find_element(By.CSS_SELECTOR, "li:nth-child(5) > a > .nav-text").click()
time.sleep(5)
driver.find_element(By.CSS_SELECTOR, ".btn-group > .btn").click()
driver.find_element(By.CSS_SELECTOR, "input[placeholder='Account name']").send_keys("Grace test")
driver.find_element(By.CSS_SELECTOR, "input[type='tel']").send_keys("0786546789")
time.sleep(5)
driver.find_element(By.CSS_SELECTOR, "option[value='Access Bank']").click()
driver.find_element(By.CSS_SELECTOR, "option[value='usd']").click()
driver.find_element(By.CSS_SELECTOR, "button[type='button']").click()
driver.quit()
print("Test 3: Create Bank Done")
