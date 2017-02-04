import static org.junit.Assert.*;
import org.junit.*;
import org.mockito.*;
import static org.mockito.Mockito.*;

public class GameTest {

  Game game;
  Rollable spyDice;
  
  @Before 
  public void before(){
    Rollable dice = new Dice(6);  //local instance of dice
    spyDice = Mockito.spy(dice);
    game = new Game(spyDice); //makes it a stub
  }

  @Test
  public void testTakeTurn(){
    Mockito.when(spyDice.roll()).thenReturn(3);
    boolean result = game.nextTurn();
    assertEquals(true, result);
  }
  
  @Test
  public void testTakeTurnFailuresStub(){
    Mockito.when(spyDice.roll()).thenReturn(2); //stubbing out the method so dice rturns 2 each time
    boolean result = game.nextTurn();
    assertEquals(false, result);

  }

  @Test
  public void takeTurnMock(){
    Rollable diceMock = mock(Rollable.class);
    game = new Game(diceMock);
    game.nextTurn();
    assertEquals(1,game.getTurnCount());
    verify(diceMock, times(1)).roll(); //roll method with diceMock to be called once, this is a check
  }
}




















