import { __ } from "@wordpress/i18n";
import { PanelBody, __experimentalUnitControl as UnitControl, PanelRow, __experimentalBorderControl as BorderControl, RangeControl } from "@wordpress/components";
import { pxUnit, perUnit } from "../../../../../../bpl-tools/utils/options";
import { Background, BoxControl, ColorControl, ColorsControl, Device, Label, Typography, } from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../bpl-tools/utils/functions";

const Style = ({ attributes, setAttributes, device }) => {
  const { style = {}, options: { playerSl } } = attributes;
  const { width, padding, radius, bg, infoBg, border, title = {}, artist = {}, thumbnail = {}, controls = {}, time = {}, range = {} } = style;


  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Player Wrapper", "audio-player-showcase")}
        initialOpen={false}
      >
        <PanelRow>
          <Label className="">{__("Width", "audio-player-showcase")}</Label>
          <Device />
        </PanelRow>
        <UnitControl
          value={width[device]}
          onChange={(v) => setAttributes({ style: updateData(style, v, "width", device) })}
          units={[pxUnit(), perUnit()]}
        />

        <UnitControl
          className="mt15"
          label={__("Padding", "audio-player-showcase")}
          value={padding}
          onChange={(v) => setAttributes({ style: updateData(style, v, "padding") })}
          units={[pxUnit(), perUnit()]}
        />

        <RangeControl
          className="mt15"
          label={__("Border Radius", "audio-player-showcase")}
          labelPosition="left"
          value={radius}
          onChange={(val) => setAttributes({ style: updateData(style, val, "radius") })}
          min={0}
          max={100}
          step={1}
        />

        <Background
          isImage={false}
          label={__("Background", "audio-player-showcase")}
          value={bg}
          onChange={(val) => setAttributes({ style: updateData(style, val, "bg") })}
        />

        {["six", "ten"].includes(playerSl) && <Background
          isImage={false}
          label={__("Info Background", "audio-player-showcase")}
          value={infoBg}
          onChange={(val) => setAttributes({ style: updateData(style, val, "infoBg") })}
        />}

        <BorderControl
          className="mt15"
          label={__("Border", "audio-player-showcase")}
          value={border}
          onChange={(val) => setAttributes({ style: updateData(style, val, "border") })}
        />

      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Title", "audio-player-showcase")}
        initialOpen={false}
      >
        <Typography
          label={__("Typo", "audio-player-showcase")}
          value={title.typo}
          onChange={(val) => setAttributes({ style: updateData(style, val, "title", "typo") })}
        />

        <ColorControl
          className="mt15"
          label={__("Color", "audio-player-showcase")}
          value={title.color}
          onChange={(val) => setAttributes({ style: updateData(style, val, "title", "color") })}
        />

      </PanelBody>

      {playerSl !== "four" && <PanelBody
        className="bPlPanelBody"
        title={__("Artist", "audio-player-showcase")}
        initialOpen={false}
      >

        <Typography
          className="mt20"
          label={__("Typo", "audio-player-showcase")}
          value={artist.typo}
          onChange={(val) => setAttributes({ style: updateData(style, val, "artist", "typo") })}
        />

        <ColorControl
          className="mt15"
          label={__("Color", "audio-player-showcase")}
          value={artist.color}
          onChange={(val) => setAttributes({ style: updateData(style, val, "artist", "color") })}
        />


      </PanelBody>}

      <PanelBody
        className="bPlPanelBody"
        title={__("Time", "audio-player-showcase")}
        initialOpen={false}
      >
        <Typography
          className="mt20"
          label={__("Time Typo", "audio-player-showcase")}
          value={time.typo}
          onChange={(val) => setAttributes({ style: updateData(style, val, "time", "typo") })}
        />

        <ColorsControl
          label={__("Colors", "audio-player-showcase")}
          value={time.colors}
          onChange={(val) => setAttributes({ style: updateData(style, val, "time", "colors") })}
        />
      </PanelBody>

      {["two", "seven", "thirteen", "fourteen", "fifteen"].includes(playerSl) && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Thumbnail", "audio-player-showcase")}
          initialOpen={false}
        >
          <PanelRow className="mt20">
            <Label className="">{__("Width", "audio-player-showcase")}</Label>
            <Device />
          </PanelRow>
          <UnitControl
            value={thumbnail.width[device]}
            onChange={(val) => setAttributes({ style: updateData(style, val, "thumbnail", "width", device) })}
            units={[pxUnit(), perUnit()]}
          />

          <PanelRow className="mt20">
            <Label className="">{__("Height", "audio-player-showcase")}</Label>
            <Device />
          </PanelRow>
          <UnitControl
            value={thumbnail.height[device]}
            onChange={(val) => setAttributes({ style: updateData(style, val, "thumbnail", "height", device) })}
            units={[pxUnit(), perUnit()]}
          />

          <BorderControl
            className="mt20 mb20"
            label={__("Border", "audio-player-showcase")}
            value={thumbnail.border}
            onChange={(val) => setAttributes({ style: updateData(style, val, "thumbnail", "border") })}
          />

          <BoxControl
            label={__("Border Radius", "audio-player-showcase")}
            values={thumbnail.radius}
            onChange={(val) => setAttributes({ style: updateData(style, val, "thumbnail", "radius") })}
            units={[pxUnit()]}
          />
        </PanelBody>
      )}

      <PanelBody
        className="bPlPanelBody"
        title={__("Controls", "audio-player-showcase")}
        initialOpen={false}
      >
        <RangeControl
          label={__("Size", "audio-player-showcase")}
          value={controls.size}
          onChange={(val) => setAttributes({ style: updateData(style, val, "controls", "size") })}
          min={10}
          max={100}
          step={1}
        />
        {!["seven", "nine", "twelve", "fifteen"].includes(playerSl) && <RangeControl
          label={__("Volume Size", "audio-player-showcase")}
          value={controls.volumeSize}
          onChange={(val) => setAttributes({ style: updateData(style, val, "controls", "volumeSize") })}
          min={10}
          max={50}
          step={1}
        />}

        <ColorControl
          className="mt20"
          label={__("Color", "audio-player-showcase")}
          value={controls.color}
          onChange={(val) => setAttributes({ style: updateData(style, val, "controls", "color") })}
        />

        <ColorControl
          label={__("Hover Color", "audio-player-showcase")}
          value={controls.hovColor}
          onChange={(val) => setAttributes({ style: updateData(style, val, "controls", "hovColor") })}
        />

        <ColorsControl
          className="mt20"
          label={__("Play & Pause Colors", "audio-player-showcase")}
          value={controls.playPauseColors}
          onChange={(val) => setAttributes({ style: updateData(style, val, "controls", "playPauseColors") })}
        />

        <ColorsControl
          className="mb20"
          label={__("Play & Pause Hover", "audio-player-showcase")}
          value={controls.playPauseHovColors}
          onChange={(val) => setAttributes({ style: updateData(style, val, "controls", "playPauseHovColors") })}
        />
      </PanelBody>

      {playerSl !== "five" && <PanelBody
        className="bPlPanelBody"
        title={__("Range", "audio-player-showcase")}
        initialOpen={false}
      >
        <ColorControl
          label={__("Color", "audio-player-showcase")}
          value={range?.color}
          onChange={(val) => setAttributes({ style: updateData(style, val, "range", "color") })}
        />

        <ColorControl
          className="mt15"
          label={__("Progress Color", "audio-player-showcase")}
          value={range?.progressColor}
          onChange={(val) => setAttributes({ style: updateData(style, val, "range", "progressColor") })}
        />

      </PanelBody>}

    </>
  );
};
export default Style;
