import java.io.*;
import java.net.*;
import java.util.*;
public class FTPClient{
	public static void main(String args[])throws IOException{ try {
		int number;
		Socket s=new Socket("127.0.0.1",10087);
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the file name:");
		String fn=sc.next();
		DataOutputStream dos=new DataOutputStream(s.getOutputStream());
		dos.writeUTF(fn);
		DataInputStream dis=new DataInputStream(s.getInputStream());
		String input=(String)dis.readUTF();
		FileInputStream fis=new FileInputStream(input);
		System.out.println("Even Numbers in the" +fn+" are");
		int i=0;
		while((i=fis.read())!=-1){ 
			System.out.println((char)i);
		}
		s.close();
	}
	catch(Exception e){
		System.out.println("Port not available "+e);
	}
	}
}
