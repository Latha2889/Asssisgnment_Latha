package Basic;


import java.util.List;
import java.util.Set;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class EventOperations {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.setProperty("webdriver.chrome.driver","C:\\Selenium\\chromedriver_win32\\chromedriver.exe");
		
		WebDriver driver=new ChromeDriver();
		WebDriverWait wait=new WebDriverWait(driver,30);
		 Actions actions = new Actions(driver);

		 try{
			 
			 driver.get("https://mighty-citadel-39240.herokuapp.com/");
			 
	 wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("html/body/app-root/mat-toolbar/button[1]"))));
			System.out.println(driver.getTitle());
			 
			Thread.sleep(2000);
			List<WebElement> forms = driver.findElements(By.xpath("//div[@class='container']/mat-card"));
			//flex-direction
			
			int count = forms.size();
			System.out.println("intial countttt::::"+count);
			
			driver.findElement(By.xpath("html/body/app-root/mat-toolbar/button[1]")).click();
			
			
		Set<String>windows =driver.getWindowHandles();
		System.out.println(windows.size());
		
		
		
/*Storing Title,Subtitle,description*/
		WebElement subtitle = driver.findElement(By.xpath("//input[@placeholder='Subtitle']"));
		WebElement title = driver.findElement(By.xpath("//input[@placeholder='title']"));
		WebElement Desc = driver.findElement(By.xpath("//textarea[@placeholder='Description']"));
/*Passing Text to title and Subtitle,description*/
		 actions.moveToElement(title).click().sendKeys("titlesss").build().perform();
		 actions.moveToElement(subtitle).click().sendKeys("subbbbb").build().perform();
		 actions.moveToElement(Desc).click().sendKeys("desccc").build().perform();

		 Thread.sleep(2000);
/* Clicking Ok button and Refresh in 2nd step */		
		driver.findElement(By.xpath("//button[normalize-space(text())='Ok']")).click();
		
		driver.findElement(By.xpath("html/body/app-root/mat-toolbar/button[2]")).click();
		Thread.sleep(2000);
/* Total count of records after adding event*/		
		List<WebElement> form = driver.findElements(By.xpath("//div[@class='container']/mat-card"));
		int Addcount = form.size();
		System.out.println("countttt::::"+Addcount);
/*Delete the Event which is created on above */		
		wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath("html/body/app-root/div/mat-card[2]/mat-card-actions/button[2]"))));
		driver.findElement(By.xpath("html/body/app-root/div/mat-card[2]/mat-card-actions/button[2]")).click();
		
		driver.findElement(By.xpath("html/body/app-root/mat-toolbar/button[2]")).click();
		Thread.sleep(2000);
/*Verifying record count after Delete*/		
		List<WebElement> form2 = driver.findElements(By.xpath("//div[@class='container']/mat-card"));
		 
		int Deletecount = form2.size();
		
		System.out.println("after Delete:countttt::::"+Deletecount);


		
		 }catch(Exception e){
			 //System.out.println(e.toString());
			 driver.close();
		 }

	}

}


		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
