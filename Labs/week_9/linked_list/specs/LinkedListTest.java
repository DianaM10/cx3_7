import static org.junit.Assert.*;
import org.junit.*;

public class LinkedListTest {

  LinkedList list;
  LinkedNode node;
  LinkedNode node;
  LinkedNode node;


  @Before
  public void before() {
    list = new LinkedList();
    node1.add(42);
    linkedList1.add(23);
    linkedList1.add(42);
    linkedList1.add(15);
    linkedList1.add(37);
  }

  @Test
  public void canGetListSize() {
    assertEquals(5, linkedList1.getSize());
  }

}