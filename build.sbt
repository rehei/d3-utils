val myName = "d3-utils"
val myVersion = sys.props.getOrElse("tag", default = "0.0.0")
val myOrganization = "com.github.rehei.webjars"


name := myName
organization := "com.github.rehei.webjars"

// set version to environment variable $tag 
version := sys.props.getOrElse("tag", default = "0.0.0")

scalaVersion := "2.11.7"

(mappings in (Compile, packageBin)) ~= { _ map {
	case (file, path) => (file, "./META-INF/resources/webjars/" + myName + "/" + myVersion + "/" + path)
}}

crossPaths := false

licenses += ("Apache-2.0", url("https://www.apache.org/licenses/LICENSE-2.0.html"))

resolvers += Resolver.bintrayRepo("rehei", "maven")

libraryDependencies ++= {
  val liftVersion = "2.6.2"
  Seq(
    "org.webjars.bower" % "d3" % "3.5.5"
  )
}

