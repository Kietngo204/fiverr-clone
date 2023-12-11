import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
export function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#fff",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        lineHeight: "48px",
        textAlign: "center",
        boxShadow:
          "0 1.2px 1.92251px rgba(0,0,0,.02), 0 2px 3.68135px rgba(0,0,0,.04), 0 1px 5px rgba(0,0,0,.05)",
      }}
      onClick={onClick}
    >
      <NavigateNextIcon sx={{ color: "#62646a" }} />
    </div>
  );
}

export function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#fff",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        lineHeight: "48px",
        textAlign: "center",
        boxShadow:
          "0 1.2px 1.92251px rgba(0,0,0,.02), 0 2px 3.68135px rgba(0,0,0,.04), 0 1px 5px rgba(0,0,0,.05)",
        zIndex: "1",
      }}
      onClick={onClick}
    >
      <NavigateBeforeIcon sx={{ color: "#62646a" }} />
    </div>
  );
}
