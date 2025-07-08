import { useBlockProps } from "@wordpress/block-editor";
import { withSelect } from "@wordpress/data";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Theme from "../Common/theme/theme";
import { playerTypeOptions } from "../../utils/options";
import { produce } from "immer";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, device } = props;
  const { options: { playerSl } } = attributes;

  const blockProps = useBlockProps({ draggable: false });

  return (
    <>
      <Settings {...{ attributes, setAttributes, device }} />

      <div {...blockProps}>
        <Style attributes={attributes} id={`block-${clientId}`} device={device} />

        {playerSl &&
          <div className="bBlocksAudioPlayer">
            <div className="audioPlayerWrapper">
              <Theme {...{ attributes }} />
            </div>
          </div>
        }

        {!playerSl && <div className="theme-preview-grid">
          {playerTypeOptions.map((option) => (
            <div
              key={option.value}
              className="theme-preview-item"
              onClick={() => setAttributes(produce(attributes, draft => {
                draft.options.playerSl = option.value;
                draft.align = '';
              }))}
            >
              <div className="theme-preview-player">
                <div className="bBlocksAudioPlayer">
                  <div className="audioPlayerWrapper">
                    <Theme
                      attributes={{
                        ...attributes,
                        options: {
                          ...attributes.options,
                          playerSl: option.value,
                        },
                      }}
                    />
                  </div>
                </div>
                <p>{option.label}</p>
              </div>
            </div>
          ))}
        </div>}

      </div>
    </>
  );
};

export default withSelect((select) => {
  const { getDeviceType } = select("core/editor");

  return {
    device: getDeviceType()?.toLowerCase(),
  };
})(Edit);
