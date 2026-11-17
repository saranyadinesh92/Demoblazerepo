import { defineConfig } from '@playwright/test';

export default defineConfig({
testDir: './tests',
fullyParallel: false,
  reporter: [
        ['list'],
        ['allure-playwright']
    ],
    use:{
    trace: 'on-first-retry',
    screenshot:'on',
    video:'on',
    headless:false,
    launchOptions:{
    slowMo:1000
    
},
    }
    
    
});