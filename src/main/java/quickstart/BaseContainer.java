package quickstart;



public interface BaseContainer {

	GraphicsConfiguration getGraphicsConfiguration();

	URL getCodeBase();

	String getParameter(String contextRootKey);

}
