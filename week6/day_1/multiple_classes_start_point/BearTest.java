import static org.junit.Assert.assertEquals;
import org.junit.*;

public class BearTest{
  Bear bear;
  Salmon salmon;

  @Before 
  public void before() {
    bear = new Bear("Baloo");
    salmon = new Salmon();
  }

  @Test
  public void hasName(){
    assertEquals( "Baloo", bear.getName() ); 
  }

  @Test
  public void bellyStartsEmpty(){
    assertEquals(0, bear.foodCount());
  }

  @Test
  public void canEatSalmon(){
    bear.eat(salmon);
    assertEquals(1, bear.foodCount());
  }

  @Test
  public void cantEatWhenBellyFull(){
    for (int i = 0; i < 10; i++ )   //declare variable, how it should run and up to what number.  
    bear.eat(salmon);
    assertEquals(5, bear.foodCount());

  }

  @Test
  public void bellyIsFull(){
    for (int i = 0; i < 5; i++){
      bear.eat(salmon);
    }
    assertEquals(true, bear.bellyFull());
  }

  @Test
  public void shouldEmptyBellyAfterSleep(){
    bear.eat(salmon);
    assertEquals(1, bear.foodCount());
    bear.sleep();
    assertEquals(0, bear.foodCount());
  }








}
