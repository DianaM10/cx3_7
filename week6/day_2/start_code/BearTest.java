import static org.junit.Assert.*;
import org.junit.*;

public class BearTest{
  Bear bear;
  Salmon salmon;
  Human human;

  @Before 
  public void before() {
    bear = new Bear("Baloo");
    salmon = new Salmon();
    human = new Human(); 
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
  public void canEatHuman(){
    bear.eat(human);
    assertEquals(1, bear.foodCount());
  }

  // @Test
  // public void bellyIsFull(){
  //   for(int i = 0; i<5; i++){
  //     bear.eat(salmon);
  //   }
  //   assertEquals(bear.bellyFull(), true);
  // }

  // @Test
  // public void canNotEatSalmonWhenBellyFull(){
  //   for(int i = 0; i<10; i++){
  //     bear.eat(salmon);
  //   }
  //   assertEquals(bear.foodCount(), 5);
  // }

  @Test
  public void shouldEmptyBellyAfterSleeping(){
    bear.eat(salmon);
    bear.eat(human);
    bear.sleep();
    assertEquals(bear.foodCount(), 0);
  }

  @Test
  public void canThrowUp(){
    bear.eat(salmon);
    Edible food = bear.throwUp();
    assertNotNull(food);
    // assertEquals("swimming", food.swim());
  }

  @Test
  public void canGetSalmonBack(){
    bear.eat(salmon);
    Edible food = bear.throwUp();
    Salmon original = (Salmon) food; //(salmon) this is the casting bit
    assertEquals("Swimming", original.swim());
  }

  @Test
  public void edibleCanSwim(){
    bear.eat(human);
    Edible food = bear.throwUp();
    assertEquals("Swimming", food.swim());
  }


 
}
