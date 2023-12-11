import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { onCloseModal } from "redux/slices/modalSlice";

const VideoModalSelling = () => {
  const { openModalVideoSelling } = useSelector(
    (state: RootState) => state.modal
  );

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(onCloseModal());
  };

  return (
    <React.Fragment>
      <Dialog open={openModalVideoSelling} onClose={handleClose} maxWidth="md">
        <video
          className="object-cover w-full"
          autoPlay
          controls
          preload="metadata"
          crossOrigin="anonymous"
        >
          <source
            src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
            type="video/mp4"
          />
          <track
            label="EN"
            srcLang="en-US"
            src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/fiverr_lohp_video_en-US.4fcbae4.vtt"
            default
            kind="subtitles"
          />
          <track
            label="DE"
            srcLang="de-DE"
            src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/fiverr_lohp_video_de-DE.29f3162.vtt"
            kind="subtitles"
          />
          <track
            label="ES"
            srcLang="es"
            src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/fiverr_lohp_video_es.beb696a.vtt"
            kind="subtitles"
          />
          <track
            label="FR"
            srcLang="fr-FR"
            src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/fiverr_lohp_video_fr-FR.2a4c696.vtt"
            kind="subtitles"
          />
          <track
            label="IT"
            srcLang="it-IT"
            src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/fiverr_lohp_video_it-IT.3e04829.vtt"
            kind="subtitles"
          />
          <track
            label="NL"
            srcLang="nl-NL"
            src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/fiverr_lohp_video_nl-NL.616c580.vtt"
            kind="subtitles"
          />
          <track
            label="PT"
            srcLang="pt-BR"
            src="https://npm-assets.fiverrcdn.com/assets/@fiverr/logged_out_homepage_perseus/fiverr_lohp_video_pt-BR.6740eea.vtt"
            kind="subtitles"
          />
        </video>
      </Dialog>
    </React.Fragment>
  );
};

export default VideoModalSelling;
