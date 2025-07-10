import { __ } from "@wordpress/i18n";
import { PanelBody, __experimentalUnitControl as UnitControl, PanelRow, __experimentalBorderControl as BorderControl, RangeControl } from "@wordpress/components";
import { pxUnit, perUnit } from "../../../../../../bpl-tools/utils/options";
import { Background, BoxControl, ColorControl, ColorsControl, Device, Label, Typography, } from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../bpl-tools/utils/functions";

const Style = ({ attributes, setAttributes, device }) => {
  const { style = {}, options: { playerSl } } = attributes;
  const { width, padding, radius, bg, border, title = {}, artist = {}, thumbnail = {}, controls = {}, time = {}, range = {} } = style;


  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Player Wrapper", "b-block")}
        initialOpen={false}
      >
        <PanelRow>
          <Label className="">{__("Width", "b-block")}</Label>
          <Device />
        </PanelRow>
        <UnitControl
          value={width[device]}
          onChange={(v) => setAttributes({ style: updateData(style, v, "width", device) })}
          units={[pxUnit(), perUnit()]}
        />

        <UnitControl
          className="mt15"
          label={__("Padding", "b-block")}
          value={padding}
          onChange={(v) => setAttributes({ style: updateData(style, v, "padding") })}
          units={[pxUnit(), perUnit()]}
        />

        <RangeControl
          className="mt15"
          label={__("Border Radius", "b-block")}
          labelPosition="left"
          value={radius}
          onChange={(val) => setAttributes({ style: updateData(style, val, "radius") })}
          min={0}
          max={100}
          step={1}
        />

        <Background
          isImage={false}
          label={__("Background", "b-block")}
          value={bg}
          onChange={(val) => setAttributes({ style: updateData(style, val, "bg") })}
        />

        <BorderControl
          className="mt15"
          label={__("Border", "b-block")}
          value={border}
          onChange={(val) => setAttributes({ style: updateData(style, val, "border") })}
        />

      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Title", "b-block")}
        initialOpen={false}
      >
        <Typography
          label={__("Typo", "b-block")}
          value={title.typo}
          onChange={(val) => setAttributes({ style: updateData(style, val, "title", "typo") })}
        />

        <ColorControl
          className="mt15"
          label={__("Color", "b-block")}
          value={title.color}
          onChange={(val) => setAttributes({ style: updateData(style, val, "title", "color") })}
        />

      </PanelBody>

      {playerSl !== "four" && <PanelBody
        className="bPlPanelBody"
        title={__("Artist", "b-block")}
        initialOpen={false}
      >

        <Typography
          className="mt20"
          label={__("Typo", "b-block")}
          value={artist.typo}
          onChange={(val) => setAttributes({ style: updateData(style, val, "artist", "typo") })}
        />

        <ColorControl
          className="mt15"
          label={__("Color", "b-block")}
          value={artist.color}
          onChange={(val) => setAttributes({ style: updateData(style, val, "artist", "color") })}
        />


      </PanelBody>}

      <PanelBody
        className="bPlPanelBody"
        title={__("Time", "b-block")}
        initialOpen={false}
      >
        <Typography
          className="mt20"
          label={__("Time Typo", "b-block")}
          value={time.typo}
          onChange={(val) => setAttributes({ style: updateData(style, val, "time", "typo") })}
        />

        <ColorsControl
          label={__("Colors", "b-block")}
          value={time.colors}
          onChange={(val) => setAttributes({ style: updateData(style, val, "time", "colors") })}
        />
      </PanelBody>

      {["two", "seven", "thirteen", "fourteen", "fifteen"].includes(playerSl) && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Thumbnail", "b-block")}
          initialOpen={false}
        >
          <PanelRow className="mt20">
            <Label className="">{__("Width", "b-block")}</Label>
            <Device />
          </PanelRow>
          <UnitControl
            value={thumbnail.width[device]}
            onChange={(val) => setAttributes({ style: updateData(style, val, "thumbnail", "width", device) })}
            units={[pxUnit(), perUnit()]}
          />

          <PanelRow className="mt20">
            <Label className="">{__("Height", "b-block")}</Label>
            <Device />
          </PanelRow>
          <UnitControl
            value={thumbnail.height[device]}
            onChange={(val) => setAttributes({ style: updateData(style, val, "thumbnail", "height", device) })}
            units={[pxUnit(), perUnit()]}
          />

          <BorderControl
            className="mt20 mb20"
            label={__("Border", "b-block")}
            value={thumbnail.border}
            onChange={(val) => setAttributes({ style: updateData(style, val, "thumbnail", "border") })}
          />

          <BoxControl
            label={__("Border Radius", "b-block")}
            values={thumbnail.radius}
            onChange={(val) => setAttributes({ style: updateData(style, val, "thumbnail", "radius") })}
            units={[pxUnit()]}
          />
        </PanelBody>
      )}

      <PanelBody
        className="bPlPanelBody"
        title={__("Controls", "b-block")}
        initialOpen={false}
      >
        <RangeControl
          label={__("Size", "b-block")}
          value={controls.size}
          onChange={(val) => setAttributes({ style: updateData(style, val, "controls", "size") })}
          min={10}
          max={100}
          step={1}
        />
        {!["seven", "nine", "twelve", "fifteen"].includes(playerSl) && <RangeControl
          label={__("Volume Size", "b-block")}
          value={controls.volumeSize}
          onChange={(val) => setAttributes({ style: updateData(style, val, "controls", "volumeSize") })}
          min={10}
          max={50}
          step={1}
        />}

        <ColorControl
          className="mt20"
          label={__("Color", "b-block")}
          value={controls.color}
          onChange={(val) => setAttributes({ style: updateData(style, val, "controls", "color") })}
        />

        <ColorControl
          label={__("Hover Color", "b-block")}
          value={controls.hovColor}
          onChange={(val) => setAttributes({ style: updateData(style, val, "controls", "hovColor") })}
        />

        <ColorsControl
          className="mt20"
          label={__("Play & Pause Colors", "b-block")}
          value={controls.playPauseColors}
          onChange={(val) => setAttributes({ style: updateData(style, val, "controls", "playPauseColors") })}
        />

        <ColorsControl
          className="mb20"
          label={__("Play & Pause Hover", "b-block")}
          value={controls.playPauseHovColors}
          onChange={(val) => setAttributes({ style: updateData(style, val, "controls", "playPauseHovColors") })}
        />
      </PanelBody>

      {playerSl !== "five" && <PanelBody
        className="bPlPanelBody"
        title={__("Range", "b-block")}
        initialOpen={false}
      >
        <ColorControl
          label={__("Color", "b-block")}
          value={range?.color}
          onChange={(val) => setAttributes({ style: updateData(style, val, "range", "color") })}
        />

        <ColorControl
          className="mt15"
          label={__("Progress Color", "b-block")}
          value={range?.progressColor}
          onChange={(val) => setAttributes({ style: updateData(style, val, "range", "progressColor") })}
        />

      </PanelBody>}

    </>
  );
};
export default Style;
