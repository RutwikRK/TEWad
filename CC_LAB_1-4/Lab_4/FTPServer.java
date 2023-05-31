import java.io.*;
import java.net.*;
import java.util.*;
public class FTPServer{
	public static void main(String args[])throws IOException{ try{
	int num;
	Scanner sc=new Scanner(System.in);
	ServerSocket ss=new ServerSocket(10087); Socket s=ss.accept();
	System.out.println("Waiting.	");
	DataInputStream dis=new DataInputStream(s.getInputStream());
	String input=(String)dis.readUTF();
	DataOutputStream dos=new DataOutputStream(s.getOutputStream());
	FileInputStream fis = new FileInputStream("out.txt");
	FileOutputStream fos = new FileOutputStream(input);
	while((num=fis.read())!= -1) {
		if(num%2==0) {
			fos.write(num);
		}
	}
	dos.writeUTF(input);
	System.out.println("File is sent to client");
	ss.close();
	s.close();
	}
	catch(Exception e) {
	System.out.println("Port not available"+e);
}
}
}
