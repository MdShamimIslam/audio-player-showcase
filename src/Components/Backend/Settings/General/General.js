import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl, PanelRow, TextControl, ToggleControl } from "@wordpress/components";
import { playerTypeOptions } from "../../../../utils/options";
import { updateData } from "../../../../utils/functions";
import { Label, InlineDetailMediaUpload } from "../../../../../../bpl-tools/Components";

const General = ({ attributes, setAttributes }) => {
  const { item, options, showcaseElements } = attributes;
  const { isNavigation, isVolume, isCurrentDurationTime } = showcaseElements || {};
  const { playerSl } = options || {};
  const { title, artist, url, cover } = item || {};

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Player Configuration", "b-blocks")}
      >
        <SelectControl
          label={__("Select Player", "b-blocks")}
          labelPosition="left"
          value={playerSl}
          options={playerTypeOptions}
          onChange={(v) => setAttributes({ options: updateData(options, v, 'playerSl') })}
          help={__("Some settings will be change when you will change the player.", "b-blocks")}
        />

        <PanelRow>
          <Label className="">{__("Title:", "b-blocks")}</Label>
          <TextControl
            value={title}
            onChange={(v) => setAttributes({ item: updateData(item, v, 'title') })}
          />
        </PanelRow>

        <PanelRow>
          <Label className="">{__("Artist:", "b-blocks")}</Label>
          <TextControl
            value={artist}
            onChange={(v) => setAttributes({ item: updateData(item, v, 'artist') })}
          />
        </PanelRow>


        <Label>{__("Audio File:", "b-blocks")}</Label>
        <InlineDetailMediaUpload
          types={["audio"]}
          value={url}
          onChange={(v) => setAttributes({ item: updateData(item, v.url, 'url') })}
          placeholder={__("Enter Audio URL", "b-blocks")}
        />

        {["two", "seven", "thirteen", "fourteen", "fifteen"].includes(playerSl) && <>
          <Label>{__("Cover Photo:", "b-blocks")}</Label>
          <InlineDetailMediaUpload
            types={["image"]}
            value={cover}
            onChange={(v) => setAttributes({ item: updateData(item, v.url, 'cover') })}
            placeholder={__("Enter Cover Image URL", "b-blocks")}
          />
        </>
        }


      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__("Elements", "b-blocks")} >
        <ToggleControl
          className="mt10"
          checked={isNavigation}
          label={__("Navigation prev/next", "b-blocks")}
          onChange={(v) => setAttributes({ showcaseElements: updateData(showcaseElements, v, "isNavigation") })
          }
        />

        <ToggleControl
          className="mt10"
          checked={isVolume}
          label={__("Show/Hide Volume", "b-blocks")}
          onChange={(v) => setAttributes({ showcaseElements: updateData(showcaseElements, v, "isVolume") })
          }
        />

        <ToggleControl
          className="mt10"
          checked={isCurrentDurationTime}
          label={__("Show Current & Duration Time", "b-blocks")}
          onChange={(v) => setAttributes({ showcaseElements: updateData(showcaseElements, v, "isCurrentDurationTime") })
          }
        />

      </PanelBody>
    </>
  );
};

export default General;
